
from django.db import models



class Product(models.Model):
    user = models.ForeignKey('auth.User')
    name_product = models.CharField(max_length=200)
    about_product = models.TextField()
    Image = None
    price = models.FloatField()


    created_date = models.DateTimeField(auto_now_add=True)
    update_date = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_date']

    def __str__(self):
        return self.name_product


class Image(models.Model):
   image_id = models.ForeignKey(Product)
   image = models.ImageField(upload_to='images/', height_field=None, width_field=None, max_length=100, blank=True,
                              null=True)

class Review(models.Model):
    product_id = models.ForeignKey(Product)
    user = models.ForeignKey('auth.User')
    review = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)

