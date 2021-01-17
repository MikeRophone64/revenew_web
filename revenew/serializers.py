from rest_framework import serializers

from .models import Hotels, CityTax, Season

class HotelSerializer(serializers.ModelSerializer):
    category = serializers.CharField(source='category.name')

    class Meta:
        model = Hotels
        fields = '__all__'


class TaxSerializer(serializers.ModelSerializer):
    hotel = serializers.CharField(source="hotel.abbrev")
    season = serializers.CharField(source="season.title")

    class Meta:
        model = CityTax
        exclude = ['id']


class SeasonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Season
        fields = '__all__'