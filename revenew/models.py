from django.db import models

# Create your models here.
class HotelCategory(models.Model):

    class Meta:
        verbose_name = "Hotel Category"
        verbose_name_plural = "Hotel Categories"

    name = models.CharField(max_length=32)

    def __str__(self):
        return self.name

class Hotels(models.Model):

    class Meta:
        verbose_name_plural = "Hotels"
    
    name = models.CharField(max_length=64)
    abbrev = models.CharField(max_length=16, verbose_name="Abbreviation")
    stars = models.IntegerField()
    category = models.ForeignKey(HotelCategory, on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class CityTax(models.Model):

    class Meta:
        verbose_name = "City Tax"
        verbose_name_plural = "City Taxes"
    hotel = models.OneToOneField(Hotels, on_delete=models.CASCADE)
    EUR = models.DecimalField(max_digits=5, decimal_places=2)
    GBP = models.DecimalField(max_digits=5, decimal_places=2)
    USD = models.DecimalField(max_digits=5, decimal_places=2)
    CHF = models.DecimalField(max_digits=5, decimal_places=2)
    DKK = models.DecimalField(max_digits=5, decimal_places=2)

    def __str__(self):
        return "Tax:" + self.hotel.name