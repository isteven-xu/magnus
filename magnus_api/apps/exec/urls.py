
from django.conf.urls import url

from apps.exec.views import *
from apps.exec.transfer import TransferView

urlpatterns = [
    url(r'template/$', TemplateView.as_view()),
    url(r'do/$', TaskView.as_view()),
    url(r'transfer/$', TransferView.as_view()),
]
