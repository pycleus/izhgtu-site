# Generated by Django 3.2 on 2022-11-24 17:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0006_alter_faceheading_text'),
    ]

    operations = [
        migrations.AlterField(
            model_name='faceheading',
            name='text',
            field=models.CharField(max_length=255, verbose_name='Text'),
        ),
    ]