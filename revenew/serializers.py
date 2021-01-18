from rest_framework import serializers

from .models import Hotels, CityTax, Season


class TaxSerializer(serializers.ModelSerializer):
    hotel_short = serializers.CharField(source="hotel.abbrev")
    hotel_full = serializers.CharField(source="hotel.name")
    season = serializers.CharField(source="season.title")

    class Meta:
        model = CityTax
        exclude = ['id']


class HotelSerializer(serializers.ModelSerializer):
    category = serializers.CharField(source='category.name')
    tax = TaxSerializer(many=True)

    class Meta:
        model = Hotels
        fields = '__all__'


class SeasonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Season
        fields = '__all__'
