from django.utils import timezone
from rest_framework import serializers
from rest_framework.exceptions import ValidationError

from ..models import Technician, Customer, Job, JobType


class TechnicianSerializer(serializers.ModelSerializer):
    class Meta:
        model = Technician
        fields = '__all__'


class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = '__all__'


class JobTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobType
        fields = '__all__'


class JobSerializer(serializers.ModelSerializer):
    customer_name = serializers.ReadOnlyField(source='customer')

    class Meta:
        model = Job
        exclude = ('created_at', 'updated_at')
        extra_kwargs = {
            'customer': {'write_only': True},
        }

    def validate(self, attrs):
        appointment_date = attrs.get('appointment_date')
        technician = attrs.get('technician')

        if appointment_date:
            if appointment_date < timezone.now():
                raise ValidationError({'appointment_date': 'Invalid date: appointment date cannot be in the past.'})

            start_time = appointment_date - timezone.timedelta(hours=1)
            end_time = appointment_date + timezone.timedelta(hours=1)
            overlapping_jobs = Job.objects.filter(
                technician=technician,
                appointment_date__range=(start_time, end_time),
                status=Job.StatusChoices.SCHEDULED
            )
            if self.instance:
                overlapping_jobs = overlapping_jobs.exclude(pk=self.instance.pk)

            if overlapping_jobs.exists():
                raise ValidationError(
                    {
                        'technician': 'Technician has another job scheduled within one hour of the requested appointment time.'
                    }
                )

        return attrs
