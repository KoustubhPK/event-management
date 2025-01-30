from django.urls import path
from . import views

#PDFMAKER

urlpatterns = [
    path('', views.index, name='home'),
    path('guest_list/', views.guest_list, name='guest_list'),
    path('guests/export/', views.export_guests_xlsx, name='export_guests_xlsx'),
    path('add_guest/', views.add_guest, name='add_guest'),
    path('guests/<int:pk>/edit/', views.edit_guest, name='edit_guest'),
    path('guests/<int:pk>/delete/', views.delete_guest, name='delete_guest'),

    path('add_event/', views.add_event, name='add_event'),

    path('event_list/', views.event_list, name='event_list'),
    path('events/<int:pk>/', views.event_detail, name='event_detail'),
    path('events/<int:pk>/edit/', views.edit_event, name='edit_event'),
    path('events/<int:pk>/delete/', views.delete_event, name='delete_event'),
    path('events/<int:event_pk>/remove_guest/<int:guest_pk>/', views.remove_guest_from_event, name='remove_guest_from_event'),

    path('add_gift/', views.add_gift, name='add_gift'),
    path('gifts/edit/<int:pk>/', views.edit_gift, name='edit_gift'),
    path('gifts/delete/<int:pk>/', views.delete_gift, name='delete_gift'),

    path('add_receive_gift/', views.add_receive_gift, name='add_receive_gift'),

    path('add_offer_gift/', views.add_offer_gift, name='add_offer_gift'),

    path('offered_gift_detail/<int:pk>/', views.offered_gift_detail, name='offered_gift_detail'),
    path('gifts/<int:gift_pk>/remove_guest/<int:guest_pk>/', views.remove_guest_from_offered_gift, name='remove_guest_from_offered_gift'),

    path('gifts/offer/edit/<int:pk>/', views.edit_offered_gift, name='edit_offered_gift'),
    path('gifts/offer/delete/<int:pk>/', views.delete_offered_gift, name='delete_offered_gift'),

    path('gift_list/', views.gift_list, name='gift_list'),
    
]