from django.urls import include, path
from . import views


urlpatterns = [
    path('', views.foo, name='foo'),
]
