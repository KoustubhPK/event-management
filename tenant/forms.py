from django import forms
from .models import Guest, Event, Gift, OfferedGift, ReceivedGift

class GuestForm(forms.ModelForm):
    class Meta:
        model = Guest
        fields = ['name']

class EventForm(forms.ModelForm):
    guests = forms.ModelMultipleChoiceField(
        queryset=Guest.objects.all(),
        widget=forms.CheckboxSelectMultiple,
        required=False
    )

    class Meta:
        model = Event
        fields = ['name', 'guests']

class GiftForm(forms.ModelForm):
    class Meta:
        model = Gift
        fields = ['name', 'description', 'stock', 'file']

class OfferedGiftForm(forms.ModelForm):
    guests = forms.ModelMultipleChoiceField(queryset=Guest.objects.all(), widget=forms.CheckboxSelectMultiple)

    class Meta:
        model = OfferedGift
        fields = ['gift', 'guests']

class ReceivedGiftForm(forms.ModelForm):
    class Meta:
        model = ReceivedGift
        fields = ['name', 'description', 'file', 'guest']