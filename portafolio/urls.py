from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'portafolio', views.PortafolioViewSet, 'portafolio')
router.register(r'contacto', views.ContactoViewSet, 'contacto')


urlpatterns = [
    path('', include(router.urls)),
]