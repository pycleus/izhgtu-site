# Generated by Django 3.2 on 2023-01-28 20:24

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0015_loginnewuserpage'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user',
            old_name='signed_up',
            new_name='is_signed_up',
        ),
    ]