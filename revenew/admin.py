from django.contrib import admin
from . import models

admin.site.register(models.HotelCategory)


class HotelAdmin(admin.ModelAdmin):
    list_display = ('name', 'abbrev', 'stars', 'category')
    ordering = ['-stars']

admin.site.register(models.Hotels, HotelAdmin)