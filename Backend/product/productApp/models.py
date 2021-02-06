from django.db import models


class Category(models.Model):
    name = models.CharField(max_length = 250)

    def __str__(self):
        return self.name

    
class SubCategory(models.Model):
    name = models.CharField(max_length = 250)
    category = models.ForeignKey(Category, on_delete= models.CASCADE, related_name='subcategory')

    def __str__(self):
        return self.name


class Product(models.Model):
    name = models.CharField(max_length = 250)
    subcategory = models.ForeignKey(SubCategory, on_delete= models.CASCADE, related_name='product')

    def __str__(self):
        return self.name