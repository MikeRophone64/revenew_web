from django.db import models

# Create your models here.
class HotelCategory(models.Model):
    name = models.CharField(max_length=32)

    def __str__(self):
        return self.name

class Hotels(models.Model):
    name = models.CharField(max_length=64)
    abbrev = models.CharField(max_length=16)
    stars = models.IntegerField()
    category = models.ForeignKey(HotelCategory, on_delete=models.CASCADE)

    def __str__(self):
        return self.name