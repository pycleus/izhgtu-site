# Generated by Django 3.2 on 2022-11-24 16:48

from django.db import migrations
import wagtail.blocks
import wagtail.fields


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='homepage',
            name='face_body',
            field=wagtail.fields.StreamField([('text', wagtail.blocks.CharBlock(help_text='Основной Текст', max_length=255)), ('short_text', wagtail.blocks.CharBlock(help_text='Короткий Текст', max_length=255)), ('size', wagtail.blocks.ChoiceBlock(choices=[('small', 'Маленький'), ('normal', 'Обычный'), ('big', 'Большой')], help_text='Размер Шрифта'))], blank=True, use_json_field=True),
        ),
    ]