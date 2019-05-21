from django.conf.urls import url
from stuapp import views
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    url(r'^stuapp/student/$', views.StudentList.as_view()),
    url(r'^stuapp/student/(?P<pk>[0-9]+)/$', views.StudentDetail.as_view()),
    url(r'^stuapp/Course/$', views.CourseList.as_view()),
    url(r'^stuapp/Course/(?P<pk>[0-9]+)/$', views.CourseDetail.as_view()),
    url(r'^stuapp/user/$', views.UserList.as_view()),
    url(r'^stuapp/user/(?P<pk>[0-9]+)/$', views.UserDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
