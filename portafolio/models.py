from django.db import models

# Create your models here.

class Portafolio(models.Model):
    nombre = models.CharField(max_length=100)
    descripcion = models.TextField()
    tecnologias = models.CharField(max_length=100)
    url = models.CharField(max_length=300)
    github = models.CharField(max_length=300)
    imagen = models.ImageField(upload_to='portafolio')

    def __str__(self):
        return self.nombre
    


class Contacto(models.Model):
    nombre = models.CharField(max_length=100)
    email = models.EmailField()
    mensaje = models.TextField()

    def __str__(self):
        return self.nombre