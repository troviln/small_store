__author__ = 'Troviln'
from django.shortcuts import render
from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User
from django.views.decorators.csrf import csrf_protect, ensure_csrf_cookie
from rest_framework import permissions, viewsets
from .models import Product, Review

from .serializers import ProductSerializer, UserSerializer, ReviewSerializer

@csrf_protect
@ensure_csrf_cookie
def index(request):
    user = authenticate(username='troviln', password='123456ok')
    if user is not None:
        login(request, user)
        return render(request, 'store/base.html')



class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class ReviewViewSet(viewsets.ModelViewSet):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class UserViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer




