# Generated by Django 3.2 on 2022-11-28 16:49

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('news', '0002_alter_news_options'),
    ]

    operations = [
        migrations.RenameField(
            model_name='news',
            old_name='createdAt',
            new_name='created_at',
        ),
        migrations.RenameField(
            model_name='news',
            old_name='updatedAt',
            new_name='updated_at',
        ),
    ]