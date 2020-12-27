# Generated by Django 3.1.4 on 2020-12-27 11:14

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('revenew', '0007_auto_20201227_1038'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='citytax',
            options={'verbose_name': 'City Tax', 'verbose_name_plural': 'City Taxes'},
        ),
        migrations.AlterField(
            model_name='citytax',
            name='hotel',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='revenew.hotels'),
        ),
    ]