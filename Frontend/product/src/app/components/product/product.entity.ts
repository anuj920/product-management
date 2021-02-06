export class SortDefault{
    name:boolean = false
    sub:boolean = false
    cate:boolean = false

    name_ASC:boolean = false
    sub_ASC:boolean = false
    cate_ASC:boolean = false
}

export class ProductElement {
    name: string = ''
    category_name: string = ''
    subcategory_name: string = ''
    // symbol!: string
    category_id!: number
    subcategory!: number
    edit:boolean = true
  }
  