# Product Management

## Backend Part

### Category - 

- <strong>API to fetch all categories -: </strong><br>
   <strong>URL</strong>-: https://master-india-django-anuj.herokuapp.com/management/categorylist/?format=json  <br>
   <strong>METHOD</strong> - GET

- <strong>API to get subcategories realated to a category-:</strong> <br>
   <strong>URL</strong>-: https://master-india-django-anuj.herokuapp.com/management/category/subcategory/<category_id>/   <br>
   <strong>METHOD</strong> - GET <br>
    Eg -: https://master-india-django-anuj.herokuapp.com/management/category/subcategory/1/

- <strong>API to get all products related to a category-:</strong> <br>
   <strong>URL</strong>-: https://master-india-django-anuj.herokuapp.com/management/category/product/<category_id>/   <br>
   <strong>METHOD</strong> - GET <br>
    Eg -: https://master-india-django-anuj.herokuapp.com/management/category/product/1/
 


### SubCategory -
 - <strong>API to get all products for a subcategory-:</strong> <br>
   <strong>URL</strong>-: https://master-india-django-anuj.herokuapp.com/management/subcategory/<subcategory_id>/   <br>
   <strong>METHOD</strong> - GET <br>
   Eg-: https://master-india-django-anuj.herokuapp.com/management/subcategory/1/


### Product -

- <strong>API to get all product List-: </strong><br>
   <strong>URL</strong>-: https://master-india-django-anuj.herokuapp.com/management/product/ <br> 
   <strong>METHOD</strong> - GET  <br>

- <strong>API to create new product under existing subcategory and category-: </strong><br>
   <strong>URL</strong>-: https://master-india-django-anuj.herokuapp.com/management/product/ <br> 
   <strong>METHOD</strong> - POST  <br>
   <strong>Body</strong>-: {name: name_of_the_product, subcategory: subcategory_id}




## Frontend Part
 The Frontend part is build using Angular 11.





## Hosting-:
- https://master-india-django-anuj.herokuapp.com/ -: Backend Part
- https://master-india-anuj.herokuapp.com/ -: Frontend Part





## Running project on local-
1) Download/clone project git directory.
2) open cmd and navigate to project folder where package.json file exist.
3) run npm install command to install node_modules
4) once installation done run 'ng serve' command.
5) open browser and type http://localhost:4200.
