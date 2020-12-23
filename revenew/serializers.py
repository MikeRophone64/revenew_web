from rest_framework import serializers

from .models import Hotels

class HotelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hotels
        fields = ('name', 'abbrev', 'category', 'stars',)