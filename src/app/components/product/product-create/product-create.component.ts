import { Product } from './../product.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductServiceTs } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css'],
  
})
export class ProductCreateComponent implements OnInit {

  product:Product = {
    name: '',
    price: null
  }

  constructor(private productServiceTs: ProductServiceTs,
    private router: Router){}

  ngOnInit(): void {
    
  }
  createProduct(){
    this.productServiceTs.create(this.product).subscribe(()=>{
      this.productServiceTs.showMessage('Produto Criado!')
      this.router.navigate(['/products'])

    })
  }
  cancel(){
    this.router.navigate(['/products'])


  }
}
