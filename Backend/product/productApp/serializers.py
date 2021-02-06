from rest_framework import serializers
from .models import Category, SubCategory, Product


class ProductModelSerilizers(serializers.ModelSerializer):
    subcategory_name = serializers.ReadOnlyField(source = 'subcategory.name', read_only = True)
    category_id = serializers.ReadOnlyField(source = 'subcategory.category.id', read_only = True)
    category_name = serializers.ReadOnlyField(source = 'subcategory.category.name', read_only = True)


    class Meta:
        model = Product
        fields = '__all__'



class CategoryModelSerilizers(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = '__all__'


class SubCategoryModelSerilizers(serializers.ModelSerializer):
    product = serializers.StringRelatedField(many = True)
    category_id = serializers.ReadOnlyField(source = 'category.id', read_only = True)
    category_name = serializers.ReadOnlyField(source = 'category.name', read_only = True)

    class Meta:
        model = SubCategory
        fields = '__all__'