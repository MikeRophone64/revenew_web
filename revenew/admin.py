from django.contrib import admin
from . import models


admin.site.site_header = "ReveNew Dashboard"
admin.site.register(models.HotelCategory)

@admin.register(models.Hotels)
class HotelAdmin(admin.ModelAdmin):
    list_display = ('name', 'abbrev', 'stars', 'category')
    ordering = ['-stars']

@admin.register(models.CityTax)
class CityTaxAdmin(admin.ModelAdmin):
    list_display = ('hotel', 'EUR', 'GBP', 'USD', 'CHF', 'DKK')
    list_editable = ('EUR', 'GBP', 'USD', 'CHF', 'DKK',)
    ordering = ['-hotel__stars']
    list_filter = ['hotel__category']
