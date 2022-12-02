# Generated by Django 3.2 on 2022-12-01 20:07

from django.db import migrations
import wagtail.blocks
import wagtail.fields


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0007_footer_menu'),
    ]

    operations = [
        migrations.AlterField(
            model_name='footer',
            name='menu',
            field=wagtail.fields.StreamField([('Page', wagtail.blocks.URLBlock())], blank=True, null=True, use_json_field=True),
        ),
    ]