from django.urls import path

from home.views import react


urlpatterns = [
    path('', react)
]