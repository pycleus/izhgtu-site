# Generated by Django 3.2 on 2022-11-18 19:33

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='homepage',
            name='faceBgImage',
        ),
        migrations.RemoveField(
            model_name='homepage',
            name='faceText',
        ),
    ]
