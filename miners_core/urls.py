from django.urls import path

from miners_core.views import react


urlpatterns = [
    path('', react),
    path('apps', react),
]