from datetime import date
from django.core.exceptions import ObjectDoesNotExist
from rest_framework.generics import ListAPIView
from rest_framework.response import Response
from revenew.serializers import HotelSerializer, TaxSerializer
from revenew.models import Hotels, CityTax, Season, Error

from revenew.error import catch

class HotelList(ListAPIView):
    queryset = Hotels.objects.all().order_by('-stars')
    serializer_class = HotelSerializer


class TaxList(ListAPIView):
    # queryset = CityTax.objects.all()
    serializer_class = TaxSerializer

    def get_queryset(self):
        """
        Get city tax for appropriate season according to date of arrival
        """

        url_date = date.fromisoformat(self.kwargs['start_date'])
        seasons = Season.objects.all()

        # still need to catch date out of range error

        selected_season = Season.objects.get(start_date__lte=url_date, end_date__gt=url_date)
        return CityTax.objects.filter(season__title=selected_season)

    