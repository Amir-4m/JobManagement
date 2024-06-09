from rest_framework import routers
from .views import JobViewSet, CustomerViewSet, TechnicianViewSet, JobTypeViewSet

router = routers.DefaultRouter()
router.register('jobs', JobViewSet, basename='jobs-api')
router.register('customers', CustomerViewSet, basename='customers-api')
router.register('technician', TechnicianViewSet, basename='technician-api')
router.register('job-types', JobTypeViewSet, basename='job-types-api')

urlpatterns = []
urlpatterns += router.urls
