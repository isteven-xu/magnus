
from django.urls import path

from .views import *

urlpatterns = [
    path('base/', BaseView.as_view()),
]