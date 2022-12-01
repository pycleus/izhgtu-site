from django import forms
from django.db import models
from wagtail.admin.panels import FieldPanel
from wagtail.blocks import StructBlock, PageChooserBlock, URLBlock, StreamBlock, CharBlock
from wagtail.fields import RichTextField, StreamField
from wagtail.snippets.models import register_snippet
from django.utils.translation import gettext_lazy as _

from home import blocks


@register_snippet
class Location(models.Model):
    name = models.CharField(_('Name'), max_length=100)
    address = models.CharField(_('Address'), max_length=300)
    description = models.CharField(_('Description'), max_length=200, null=True, blank=True)

    panels = [
        FieldPanel('name'),
        FieldPanel('address'),
        FieldPanel('description'),
    ]

    def __str__(self):
        return f"{self.name}"


@register_snippet
class Contact(models.Model):
    name = models.CharField(_('Name'), max_length=100)
    address = models.CharField(f"{_('Phone')}/{_('Email')}/{_('Social')}", max_length=500)
    type = models.CharField(_('Type'), choices=(
        ('email', _('Email')),
        ('phone', _('Phone')),
        ('social', _('Social'))
    ), default='phone', max_length=100)

    panels = [
        FieldPanel('name'),
        FieldPanel('address'),
        FieldPanel('type', widget=forms.RadioSelect),
    ]

    def __str__(self):
        return f"{self.name}"


@register_snippet
class Header(models.Model):
    name = models.CharField(_('Name'), max_length=100)
    locations = models.ManyToManyField(
        'core.Location',
        verbose_name=_('Location Addresses'),
        blank=True
    )
    contacts = models.ManyToManyField(
        'core.Contact',
        verbose_name=_('Contacts'),
        blank=True
    )

    panels = [
        FieldPanel('name'),
        FieldPanel('locations', widget=forms.CheckboxSelectMultiple),
        FieldPanel('contacts', widget=forms.CheckboxSelectMultiple),
    ]

    def __str__(self):
        return f"{self.name}"


class FooterMenuLinkAbstract(StructBlock):
    name = CharBlock(help_text=_('Name'), max_length=100)

    class Meta:
        abstract = True


class FooterMenuLinkPage(FooterMenuLinkAbstract):
    page = PageChooserBlock(help_text=_('Page'))


class FooterMenuLinkUrl(FooterMenuLinkAbstract):
    page = URLBlock(_('Page'))


@register_snippet
class Footer(models.Model):
    name = models.CharField(_('Name'), max_length=100)
    right_description = RichTextField(_('Right Description'), features=(
        'h3',
        'h4',
        'h5',
        'bold',
        'link',
        'italic',
        'document-link',
        'hr',
        'blockquote'
    ))
    # socials = models.ManyToManyField(
    #     'core.Contact',
    #     verbose_name=_('Contacts'),
    #     blank=True
    # )
    menu = StreamField((
        ('url', FooterMenuLinkUrl()),
        ('site_page', FooterMenuLinkPage()),
    ), use_json_field=True, blank=True, null=True)

    show_contact_form = models.BooleanField(_('Show Contact Form?'), default=True)

    panels = [
        FieldPanel('name'),
        FieldPanel('show_contact_form'),
        FieldPanel('menu'),
        FieldPanel('right_description'),
    ]

    def __str__(self):
        return f"{self.name}"
