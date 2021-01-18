from django.db import models


class HotelCategory(models.Model):
    class Meta:
        verbose_name = "Hotel Category"
        verbose_name_plural = "Hotel Categories"

    name = models.CharField(max_length=32)

    def __str__(self):
        return self.name


class Hotels(models.Model):
    """
    All Hotels offered by CRO
    """

    class Meta:
        verbose_name_plural = "Hotels"
    
    name = models.CharField(max_length=64)
    abbrev = models.CharField(max_length=16, verbose_name="Abbreviation")
    stars = models.IntegerField()
    category = models.ForeignKey(HotelCategory, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='media/', blank=True)

    def __str__(self):
        return self.name


class Season(models.Model):
    """
    Seasons according to DLP pricing seasons
    """

    class Meta:
        verbose_name_plural = "Seasons"

    title = models.CharField(max_length=32, verbose_name="Season Name")
    start_date = models.DateField(verbose_name="Start")
    end_date = models.DateField(verbose_name="End")

    def __str__(self):
        return self.title


class ProcessingFees(models.Model):
    class Meta:
        verbose_name_plural = "Processing Fees"
        
    title = models.CharField(max_length=32)
    EUR = models.DecimalField(max_digits=5, decimal_places=2)
    DKK = models.DecimalField(max_digits=5, decimal_places=2)
    CHF = models.DecimalField(max_digits=5, decimal_places=2)
    GBP = models.DecimalField(max_digits=5, decimal_places=2)
    USD = models.DecimalField(max_digits=5, decimal_places=2)

    def __str__(self):
        return self.title



class CityTax(models.Model):
    
    class Meta:
        verbose_name = "City Tax"
        verbose_name_plural = "City Taxes"
        
    season = models.ForeignKey(Season, on_delete=models.CASCADE, null=True)
    hotel = models.ForeignKey(Hotels, on_delete=models.CASCADE, related_name="tax")
    EUR = models.DecimalField(max_digits=5, decimal_places=2)
    DKK = models.DecimalField(max_digits=5, decimal_places=2)
    CHF = models.DecimalField(max_digits=5, decimal_places=2)
    GBP = models.DecimalField(max_digits=5, decimal_places=2)
    USD = models.DecimalField(max_digits=5, decimal_places=2)

    def __str__(self):
        return self.season.title


class Error(models.Model):
    title = models.CharField(max_length=32)
    description = models.TextField(max_length=140)

    def __str__(self):
        return self.title