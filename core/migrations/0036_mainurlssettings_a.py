# Generated by Django 3.2 on 2023-01-08 09:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0035_delete_socialsettings'),
    ]

    operations = [
        migrations.AddField(
            model_name='mainurlssettings',
            name='a',
            field=models.URLField(blank=True, max_length=500, null=True, verbose_name='A'),
        ),
    ]