from rest_framework import serializers

from .models import Hotels

class HotelSerializer(serializers.ModelSerializer):
    category = serializers.CharField(source='category.name')

    class Meta:
        model = Hotels
        fields = '__all__'