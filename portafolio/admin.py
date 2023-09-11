from django.contrib import admin

from .models import Portafolio
from .models import Contacto

# Register your models here.
admin.site.register(Portafolio)
admin.site.register(Contacto)
