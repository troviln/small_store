from django.contrib import admin
from .models import Product, Image, Review


class ImageInline(admin.TabularInline):
    model = Image
    fields = ['image', ]
    extra = 3


class ReviewInline(admin.TabularInline):
    model = Review
    fields = ['user', 'review']
    extra = 1

class ProductAdmin(admin.ModelAdmin):
    inlines = [ImageInline, ReviewInline]



admin.site.register(Product, ProductAdmin)
