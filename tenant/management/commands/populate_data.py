import random
from django.core.management.base import BaseCommand
from faker import Faker
from tenant.models import Guest, Event, Gift, OfferedGift, ReceivedGift

fake = Faker()

class Command(BaseCommand):
    help = "Generate fake data for Guests, Events, Gifts, and Gift Transactions"

    def handle(self, *args, **kwargs):
        self.create_guests(10)
        self.create_events(5)
        self.create_gifts(10)
        self.create_offered_gifts(10)
        self.create_received_gifts(10)
        self.stdout.write(self.style.SUCCESS("Fake data generated successfully."))

    def create_guests(self, count):
        for _ in range(count):
            Guest.objects.create(name=fake.name())

    def create_events(self, count):
        guests = list(Guest.objects.all())
        for _ in range(count):
            event = Event.objects.create(name=fake.sentence(nb_words=3))
            event.guests.set(random.sample(guests, min(len(guests), random.randint(1, 5))))

    def create_gifts(self, count):
        for _ in range(count):
            Gift.objects.create(
                name=fake.word().capitalize(),
                description=fake.text(),
                stock=random.randint(1, 50),
            )

    def create_offered_gifts(self, count):
        gifts = list(Gift.objects.all())
        guests = list(Guest.objects.all())
        for _ in range(count):
            gift = random.choice(gifts)
            offered_gift = OfferedGift.objects.create(gift=gift)
            offered_gift.guests.set(random.sample(guests, min(len(guests), random.randint(1, 3))))

    def create_received_gifts(self, count):
        guests = list(Guest.objects.all())
        for _ in range(count):
            ReceivedGift.objects.create(
                name=fake.word().capitalize(),
                description=fake.text(),
                guest=random.choice(guests),
            )
