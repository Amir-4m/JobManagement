from django.db import models
from django.utils.translation import ugettext_lazy as _

from mixins.model_mixins import BaseModelMixin, UserInfoModelMixin


class Technician(BaseModelMixin, UserInfoModelMixin):
    is_active = models.BooleanField(
        _("Active ?"),
        default=True
    )

    class Meta:
        verbose_name = _('Technician')
        verbose_name_plural = _('Technicians')

    def full_name(self):
        return f'{self.first_name} {self.last_name}'

    def __str__(self):
        return f"{self.id} - {self.full_name()}"


class Customer(BaseModelMixin, UserInfoModelMixin):
    is_active = models.BooleanField(
        _("Active ?"),
        default=True
    )

    class Meta:
        verbose_name = _('Customer')
        verbose_name_plural = _('Customers')

    def full_name(self):
        return f'{self.first_name} {self.last_name}'

    def __str__(self):
        return f"{self.id} - {self.full_name()}"


class JobType(BaseModelMixin):
    name = models.CharField(
        _('Job Type'),
        max_length=120,
        unique=True
    )
    is_active = models.BooleanField(
        _('Active ?'),
        default=True
    )

    class Meta:
        verbose_name = _('Job Type')
        verbose_name_plural = _('Job Types')

    def __str__(self):
        return self.name


class Job(BaseModelMixin):
    class StatusChoices(models.TextChoices):
        SCHEDULED = 'scheduled', _('Scheduled')
        COMPLETED = 'completed', _('Completed')

    appointment_date = models.DateTimeField(
        verbose_name=_("Appointment Date"),
        null=True,
        blank=True
    )
    status = models.CharField(
        _('Status'),
        max_length=9,
        choices=StatusChoices.choices,
        default=StatusChoices.SCHEDULED
    )
    job_type = models.CharField(
        verbose_name=_('Job Type'),
        max_length=120
    )
    technician = models.CharField(
        verbose_name=_('Technician'),
        max_length=120
    )
    customer = models.CharField(
        verbose_name=_('Customer'),
        max_length=120
    )
    is_active = models.BooleanField(
        default=True
    )

    class Meta:
        verbose_name = _('Job')
        verbose_name_plural = _('Jobs')

    def __str__(self):
        return f"{self.job_type} {str(self.customer)}"
