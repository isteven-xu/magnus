
from django.urls import path

from apps.host.views import *
from apps.host.group import GroupView
from apps.host.extend import ExtendView
from apps.host.add import get_regions, cloud_import

urlpatterns = [
    path('', HostView.as_view()),
    path('extend/', ExtendView.as_view()),
    path('group/', GroupView.as_view()),
    path('import/', post_import),
    path('import/cloud/', cloud_import),
    path('import/region/', get_regions),
    path('parse/', post_parse),
    path('valid/', batch_valid),
]
