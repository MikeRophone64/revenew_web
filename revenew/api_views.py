from rest_framework.generics import ListAPIView
from revenew.serializers import HotelSerializer, TaxSerializer
from revenew.models import Hotels, CityTax

class HotelList(ListAPIView):
    queryset = Hotels.objects.all().order_by('-stars')
    serializer_class = HotelSerializer


class TaxList(ListAPIView):
    queryset = CityTax.objects.all()
    serializer_class = TaxSerializer