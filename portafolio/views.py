from rest_framework import viewsets
from .models import Portafolio
from .models import Contacto
from .serializers import PortafolioSerializer
from .serializers import ContactoSerializer

# Create your views here.
class PortafolioViewSet(viewsets.ModelViewSet):
    queryset = Portafolio.objects.all()
    serializer_class = PortafolioSerializer

class ContactoViewSet(viewsets.ModelViewSet):
    queryset = Contacto.objects.all()
    serializer_class = ContactoSerializer