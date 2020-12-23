from django.db import models

# Create your models here.
class Hotels(models.Model):
    category_choices = [
        ("Disney Hotel", "Disney Hotel"),
        ("Partner Hotel", "Partner Hotel")
    ]
    name = models.CharField(max_length=64)
    abbrev = models.CharField(max_length=16)
    stars = models.IntegerField()
    category = models.CharField(max_length=32, choices=category_choices, default=category_choices[0])

    def __str__(self):
        return self.name