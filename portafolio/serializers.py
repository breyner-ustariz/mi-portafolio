
from rest_framework import serializers

from .models import Portafolio
from .models import Contacto

class PortafolioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Portafolio
        fields = '__all__'

class ContactoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contacto
        fields = '__all__'




        