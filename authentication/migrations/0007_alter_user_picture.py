# Generated by Django 3.2 on 2022-12-08 18:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0006_auto_20221208_2203'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='picture',
            field=models.ImageField(blank=True, null=True, upload_to='userPictures/', verbose_name='Profile Picture'),
        ),
    ]
