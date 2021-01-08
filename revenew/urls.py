from django.urls import path
import revenew.api_views

from . import views
import revenew.api_views

app_name = "revenew"

urlpatterns = [
    path('hotels', revenew.api_views.HotelList.as_view()),
    path('tax/<slug:start_date>', revenew.api_views.TaxList.as_view()),
]