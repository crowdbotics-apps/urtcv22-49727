# Generated by Django 3.2.25 on 2024-10-18 07:32

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('home', '0001_load_initial_data'),
    ]

    operations = [
        migrations.CreateModel(
            name='Yncbdh',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('teucc', models.DecimalField(decimal_places=10, max_digits=30)),
                ('bvchdjd', models.TimeField()),
            ],
        ),
    ]