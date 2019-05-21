from rest_framework import serializers
from .models import Student, Course
from django.contrib.auth.models import User


class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = ('id','Subject',)

    def create(self, validated_data):
         return Course.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.Subject=validated_data.get('Subject', instance.Subject)
        instance.save()
        return instance

class StudentSlugRelatedField(serializers.SlugRelatedField):

    def get_queryset(self):
        subject=Course.objects.all()
        return subject

class StudentSerializer(serializers.ModelSerializer):

    #subject = serializers.StringRelatedField(many=True)
    #subject = serializers.SlugRelatedField(many=True,slug_field='Subject',queryset=Course.objects.all())
    #subject = StudentSlugRelatedField(many=True,slug_field='Subject',read_only=True)
    subject=StudentSlugRelatedField(many=True,slug_field='Subject')
    class Meta:
        model = Student
        fields = ('id','Stu_name', 'Stu_father', 'Stu_address', 'Stu_ph', 'Stu_age', 'birth_date', 'subject')

    def create(self, validated_data):
        subject = validated_data.pop('subject')
        student = Student.objects.create(**validated_data)
        student.subject = subject
        return student

    def update(self, instance, validated_data):
        instance.Stu_name=validated_data.get('Stu_name', instance.Stu_name)
        instance.Stu_father=validated_data.get('Stu_father', instance.Stu_father)
        instance.Stu_address=validated_data.get('Stu_address', instance.Stu_address)
        instance.Stu_ph=validated_data.get('Stu_ph', instance.Stu_ph)
        instance.Stu_age=validated_data.get('Stu_age', instance.Stu_age)
        instance.birth_date=validated_data.get('birth_date', instance.birth_date)
        instance.subject=validated_data.get('subject', instance.subject)
        instance.save()
        return instance

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username','password')

