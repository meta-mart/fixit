# Generated by Django 4.2.10 on 2024-04-09 11:34

from django.db import migrations, models
import fixit.db.models.page

class Migration(migrations.Migration):

    dependencies = [
        ('db', '0063_state_is_triage_alter_state_group'),
    ]

    operations = [
        migrations.AddField(
            model_name="page",
            name="view_props",
            field=models.JSONField(
                default=fixit.db.models.page.get_view_props
            ),
        ),
    ]
