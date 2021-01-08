from django.contrib import admin
from .models import CityTax, Hotels, HotelCategory, Season, ProcessingFees, Error
from django.db import models
from django.forms import TextInput, Textarea
from django.http import HttpResponseRedirect
from django.urls import path



admin.site.site_header = "ReveNew Dashboard"
# admin.site.register(HotelCategory)
admin.site.register(Season)
admin.site.register(ProcessingFees)
admin.site.register(Error)

@admin.register(Hotels)
class HotelAdmin(admin.ModelAdmin):
    list_display = ('name', 'abbrev', 'stars', 'category')
    ordering = ['-stars']


@admin.register(CityTax)
class CityTaxAdmin(admin.ModelAdmin):
    formfield_overrides = {
        models.CharField: {'widget': TextInput(attrs={'size':'10'})},
        models.TextField: {'widget': Textarea(attrs={'rows':4, 'cols':40})},
        models.DecimalField: {'widget': TextInput(attrs={'size':'10'})},
    }

    list_display = ('season', 'hotel', 'EUR', 'GBP', 'USD', 'CHF', 'DKK')
    list_editable = ('EUR', 'GBP', 'USD', 'CHF', 'DKK',)
    list_display_links = ['hotel']
    ordering = ['-hotel__stars']
    list_filter = ['hotel__category', 'season__title']