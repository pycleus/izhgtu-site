# Generated by Django 3.2 on 2022-12-01 20:18

from django.db import migrations
import wagtail.blocks
import wagtail.fields


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0008_alter_footer_menu'),
    ]

    operations = [
        migrations.AlterField(
            model_name='footer',
            name='menu',
            field=wagtail.fields.StreamField([('url', wagtail.blocks.StreamBlock([('page', wagtail.blocks.URLBlock('Page'))])), ('site_page', wagtail.blocks.StreamBlock([('page', wagtail.blocks.PageChooserBlock(can_choose_root=True, help_text='Page'))]))], blank=True, null=True, use_json_field=True),
        ),
    ]
