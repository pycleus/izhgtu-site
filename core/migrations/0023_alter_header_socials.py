# Generated by Django 3.2 on 2022-12-03 13:19

from django.db import migrations
import modelcluster.fields


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0022_alter_footer_socials'),
    ]

    operations = [
        migrations.AlterField(
            model_name='header',
            name='socials',
            field=modelcluster.fields.ParentalManyToManyField(blank=True, to='core.Social', verbose_name='Socials'),
        ),
    ]