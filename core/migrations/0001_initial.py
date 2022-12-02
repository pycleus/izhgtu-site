# Generated by Django 3.2 on 2022-12-01 13:05

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('wagtailcore', '0078_referenceindex'),
    ]

    operations = [
        migrations.CreateModel(
            name='SocialSettings',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('vk', models.URLField(blank=True, max_length=500, null=True, verbose_name='VK')),
                ('telegram', models.URLField(blank=True, max_length=500, null=True, verbose_name='Telegram')),
                ('youtube', models.URLField(blank=True, max_length=500, null=True, verbose_name='YouTube')),
                ('site', models.OneToOneField(editable=False, on_delete=django.db.models.deletion.CASCADE, to='wagtailcore.site')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]