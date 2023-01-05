# Generated by Django 3.2 on 2023-01-05 13:42

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0008_remove_teacher_groups'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='profile',
            name='achievements',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='contacts',
        ),
        migrations.AddField(
            model_name='userachievement',
            name='user_profile',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='achievements', to='users.profile'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='usercontact',
            name='user_profile',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='contacts', to='users.profile'),
            preserve_default=False,
        ),
        migrations.AlterUniqueTogether(
            name='userachievement',
            unique_together={('user_profile', 'achievement')},
        ),
        migrations.AlterUniqueTogether(
            name='usercontact',
            unique_together={('user_profile', 'title')},
        ),
        migrations.RemoveField(
            model_name='userachievement',
            name='user',
        ),
        migrations.RemoveField(
            model_name='usercontact',
            name='user',
        ),
    ]
