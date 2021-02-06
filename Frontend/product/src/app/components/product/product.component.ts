import {AfterViewInit, Component, ViewChild, OnInit, ElementRef} from '@angular/core';
import { ServiceService } from '../service.service';
import { SortDefault, ProductElement } from './product.entity';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{

  categoryList:any
  subCategoryList:any
  productList:Array<ProductElement> =  [];
  sortingCase:any;
  edit:boolean = false

  newProduct:ProductElement;

  sortMatch:any = {
    "name" : "name",
    "sub" : "subcategory_name",
    "cate": "category_name"
  }
  toast:any = {
    show:false,
    type:'',
    msg:''
  }

  @ViewChild('product_element', {static:false}) tableContent!:ElementRef

  constructor(private service: ServiceService) { 
    this.sortingCase = new SortDefault()
    this.newProduct = new ProductElement()
  }

  ngOnInit(): void {
    this.getCategory()
    this.getProduct()
  }

  getCategory(){
    this.service.get('categorylist/').subscribe(res=>{
      this.categoryList = res
    })
  }

  getSubCategory(category:number){
    if(category){
      this.service.get(`category/subcategory/${category}/`).subscribe(res=>{
        this.subCategoryList = res['subcategory_list']
        this.newProduct.subcategory = this.subCategoryList[0].id
      })
    }
  }

  getProduct(){
    this.service.get('product/').subscribe(res=>{
      this.productList = res
      this.sortByValue('name')
    })
  }

  createProduct(){
    if(this.newProduct.name && this.newProduct.category_id && this.newProduct.subcategory){
      this.service.post('product/', this.newProduct).subscribe(res=>{
        let index = this.productList.findIndex(i=> i.edit == true)
        this.productList.splice(index, 1)
        let new_product:ProductElement = res
        new_product['edit'] = false
        this.productList.push(new_product)
        this.newProduct = new ProductElement();
        this.edit = false
        this.showToast("Product Added To the Table", "_success", 4000)
      },
      err=>{
        this.showToast("There is some Server issue", "_error", 4000)
      })
    }
    else{
      this.showToast("Product name, Sub category Can't be empty", "_error", 10000)
    }
  }


  
  sortByValue(value:any){
    ///  Preventing Sorting When Creating New Product
    if(!this.edit){
      let ele:string = this.sortMatch[value]
      const value_asc:any = value+"_ASC";
      if(this.sortingCase[value] && this.sortingCase[value_asc]){
        this.sortingCase[value_asc] = false
        this.productList.sort((b:any,a:any)=>(a[ele].toUpperCase() > b[ele].toUpperCase()) ? 1 : ((b[ele].toUpperCase() > a[ele].toUpperCase()) ? -1 : 0))
      }
      else{
        this.sortingCase = new SortDefault()
        this.sortingCase[value] = true
        this.sortingCase[value_asc] = true
        this.productList.sort((a:any,b:any)=>(a[ele].toUpperCase() > b[ele].toUpperCase()) ? 1 : ((b[ele].toUpperCase() > a[ele].toUpperCase()) ? -1 : 0))
      }
    }
  }


  addNewProduct(){
    let product = new ProductElement()
    this.productList.push(product)
    this.edit = true
    setTimeout(() => {
      this.tableContent.nativeElement.scroll({ top: this.tableContent.nativeElement.scrollHeight, behavior: 'smooth' });
    }, 100);
  }

  showToast(msg:string, type:string, time:number){
    this.toast.msg = msg
    this.toast.type = type
    this.toast.show = true
    setTimeout(() => {
      this.toast.show = false
    }, time);
  }


}
