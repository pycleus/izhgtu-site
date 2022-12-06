# Generated by Django 3.2 on 2022-12-06 13:32

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('svg', '0001_initial'),
        ('core', '0028_alter_maincontentsettings_logo'),
    ]

    operations = [
        migrations.AlterField(
            model_name='footer',
            name='show_contact_form',
            field=models.BooleanField(default=True, verbose_name='Show Contact Form'),
        ),
        migrations.AlterField(
            model_name='social',
            name='icon',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='svg.svgtyped', verbose_name='Icon'),
        ),
    ]
