from django.contrib import admin

from apps.core.models import Technician, Customer, JobType, Job


@admin.register(Technician)
class TechnicianAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'created_at', 'updated_at')
    search_fields = ('first_name', 'last_name')


@admin.register(Customer)
class CustomerAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'created_at', 'updated_at')
    search_fields = ('first_name', 'last_name')


@admin.register(JobType)
class JobTypeAdmin(admin.ModelAdmin):
    list_display = ('name', 'created_at', 'updated_at')
    search_fields = ('name',)


@admin.register(Job)
class JobAdmin(admin.ModelAdmin):
    list_display = ('job_type', 'technician', 'customer', 'status', 'appointment_date', 'created_at', 'updated_at')
    list_filter = ('status', 'job_type')
