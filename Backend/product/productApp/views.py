from django.shortcuts import render
from rest_framework import generics, status
from .serializers import CategoryModelSerilizers, SubCategoryModelSerilizers, ProductModelSerilizers
from .models import Category, Product, SubCategory
from rest_framework.views import APIView
from rest_framework.response import Response



class CategoryList(generics.ListAPIView):

    serializer_class = CategoryModelSerilizers
    queryset = Category.objects.all()



class SubCategoryAPI(generics.RetrieveAPIView):

    serializer_class = SubCategoryModelSerilizers
    queryset = SubCategory.objects.all().prefetch_related('product')


class ProductAPI(generics.ListCreateAPIView):

    serializer_class = ProductModelSerilizers
    queryset = Product.objects.all().select_related('subcategory', 'subcategory__category')


class CategoryAPI(APIView):

    def get(self, request, name, pk):
        try:
            return getattr(self,'get_'+name)(pk)
        except Exception as e:
            return Response({"error":"Invalid url request", "error_msg":str(e)}, status=status.HTTP_400_BAD_REQUEST)

    def get_product(self, pk):
        obj = Product.objects.filter(subcategory__category__id = pk).values('id', 'name', 'subcategory__name', 'subcategory__category__name')
        return Response({"product_list":obj}, status= status.HTTP_200_OK)

    def get_subcategory(self, pk):
        obj = SubCategory.objects.filter(category__id = pk).values('id', 'name','category__name')
        return Response({"subcategory_list":obj}, status= status.HTTP_200_OK)