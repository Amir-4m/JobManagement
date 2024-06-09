from django.core.validators import RegexValidator
from django.db import models
from django.utils.translation import ugettext_lazy as _


class BaseModelMixin(models.Model):
    __doc__ = _("Base Model includes `created_at` and `updated_at`.")
    created_at = models.DateTimeField(
        _("Created at"),
        auto_now_add=True,
        editable=False,
        help_text=_("Timestamp when the object was created.")
    )
    updated_at = models.DateTimeField(
        _("Updated at"),
        auto_now=True,
        editable=False
    )

    class Meta:
        abstract = True
        ordering = ['-created_at']


class UserInfoModelMixin(models.Model):
    first_name = models.CharField(
        _('First Name'),
        max_length=120
    )
    last_name = models.CharField(
        _('Last Name'),
        max_length=120
    )

    class Meta:
        abstract = True
