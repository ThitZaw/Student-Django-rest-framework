# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Course(models.Model):
    Subject = models.CharField(max_length=200)

    def __unicode__(self):return self.Subject





class Student(models.Model):
    Stu_name = models.CharField(max_length=200)
    Stu_father = models.CharField(max_length=200)
    Stu_address = models.CharField(max_length=200)
    Stu_ph = models.IntegerField(default=0)
    Stu_age = models.IntegerField(default=0)
    birth_date = models.DateField(blank=True, null=True)
    subject = models.ManyToManyField(Course)


    def __unicode__(self):return self.Stu_name
