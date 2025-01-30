from django.contrib import admin
from .models import Event, Guest, Gift, OfferedGift, ReceivedGift
# Register your models here.

admin.site.register(Event)
admin.site.register(Guest)
admin.site.register(Gift)
admin.site.register(OfferedGift)
admin.site.register(ReceivedGift)