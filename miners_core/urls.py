from django.urls import path

from miners_core.views import index


urlpatterns = [
    path('', index),
    path('apps', index),
]