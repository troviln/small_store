__author__ = 'Troviln'
from rest_framework import serializers
from .models import Product, Image, Review
from django.contrib.auth.models import User


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ('image',)


class ReviewSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.username')

    class Meta:
        model = Review
        fields = ('id', 'product_id', 'review', 'user', 'created_date')


class ProductSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.username')
    reviews = ReviewSerializer(many=True, source="review_set")
    images = ImageSerializer(many=True, source="image_set")

    class Meta:
        model = Product
        fields = (
            'id', 'user', 'name_product', 'about_product', 'images', 'price', 'created_date', 'update_date', 'reviews')


class UserSerializer(serializers.ModelSerializer):


    class Meta:
        model = User
        fields = ('username', 'first_name', 'last_name', 'last_login')