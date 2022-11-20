# Generated by Django 3.2 on 2022-11-19 10:05

from django.db import migrations
import wagtail.blocks
import wagtail.fields


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0007_alter_homepage_facebody'),
    ]

    operations = [
        migrations.RenameField(
            model_name='homepage',
            old_name='faceBg',
            new_name='face_bg',
        ),
        migrations.RemoveField(
            model_name='homepage',
            name='faceBody',
        ),
        migrations.AddField(
            model_name='homepage',
            name='face_body',
            field=wagtail.fields.StreamField([('heading', wagtail.blocks.StructBlock([('text', wagtail.blocks.CharBlock(help_text='Основной Текст', max_length=255)), ('short_text', wagtail.blocks.CharBlock(help_text='Короткий Текст', max_length=255)), ('size', wagtail.blocks.ChoiceBlock(choices=[('small', 'Маленький'), ('normal', 'Обычный'), ('big', 'Большой')], help_text='Размер Шрифта'))]))], blank=True, use_json_field=True),
        ),
    ]
