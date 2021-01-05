from rest_framework.generics import ListAPIView
from revenew.serializers import HotelSerializer
from revenew.models import Hotels

class HotelList(ListAPIView):
    queryset = Hotels.objects.all().order_by('-stars')
    serializer_class = HotelSerializer