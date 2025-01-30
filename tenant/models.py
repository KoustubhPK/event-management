from django.db import models

# Create your models here.
    
class Guest(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name
    
class Event(models.Model):
    name = models.CharField(max_length=100)
    guests = models.ManyToManyField(Guest, blank=True)

    def __str__(self):
        return self.name
    
class Gift(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    stock = models.PositiveIntegerField(default=0)
    file = models.FileField(upload_to='gifts/', blank=True)

    def __str__(self):
        return self.name

class OfferedGift(models.Model):
    gift = models.ForeignKey(Gift, on_delete=models.CASCADE, related_name='offered_gifts')
    guests = models.ManyToManyField(Guest, related_name='offered_gifts')

    def __str__(self):
        return f"{self.gift.name} offered"
    
class ReceivedGift(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    file = models.FileField(upload_to='received_gifts/', blank=True)
    guest = models.ForeignKey(Guest, on_delete=models.CASCADE, related_name='received_gifts')

    def __str__(self):
        return self.name