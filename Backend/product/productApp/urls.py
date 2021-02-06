from django.urls import path
from . import views

urlpatterns = [
    path('product/', views.ProductAPI.as_view(), name='product'),
    path('categorylist/', views.CategoryList.as_view(), name='category'),
    path('category/<str:name>/<int:pk>/', views.CategoryAPI.as_view(), name='subcategory-product'),
    path('subcategory/<int:pk>/', views.SubCategoryAPI.as_view(), name='subcategory')
]