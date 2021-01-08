from rest_framework import serializers

from .models import Hotels, CityTax

class HotelSerializer(serializers.ModelSerializer):
    category = serializers.CharField(source='category.name')

    class Meta:
        model = Hotels
        fields = '__all__'


class TaxSerializer(serializers.ModelSerializer):
    hotel = serializers.CharField(source="hotel.name")
    season = serializers.CharField(source="season.title")

    class Meta:
        model = CityTax
        fields = '__all__'