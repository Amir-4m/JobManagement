from rest_framework import viewsets

from .serializers import JobSerializer, JobTypeSerializer, TechnicianSerializer, CustomerSerializer
from ..models import Technician, Customer, Job, JobType


class TechnicianViewSet(viewsets.ModelViewSet):
    queryset = Technician.objects.filter(is_active=True)
    serializer_class = TechnicianSerializer
    search_fields = ('first_name', 'last_name',)


class CustomerViewSet(viewsets.ModelViewSet):
    queryset = Customer.objects.filter(is_active=True)
    serializer_class = CustomerSerializer
    search_fields = ('first_name', 'last_name',)


class JobViewSet(viewsets.ModelViewSet):
    queryset = Job.objects.filter(is_active=True)
    serializer_class = JobSerializer
    filterset_fields = ('status', 'job_type', 'technician', 'customer')


class JobTypeViewSet(viewsets.ModelViewSet):
    queryset = JobType.objects.filter(is_active=True)
    serializer_class = JobTypeSerializer
    search_fields = ('name',)
