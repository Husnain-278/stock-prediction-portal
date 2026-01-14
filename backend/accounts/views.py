from django.shortcuts import render
from rest_framework import generics, permissions, views
from .serializers import UserSerializer
from django.contrib.auth.models import User
from rest_framework.response import Response

# Create your views here
class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes= [permissions.AllowAny]


class ProtectedRoute(views.APIView):
    permission_classes = [permissions.IsAuthenticated]
    def get(self, request):
       return Response(
           {
               'status': 'Request is Permitted!'
           }
       )