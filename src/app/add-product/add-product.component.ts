import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private http: Http) { }
  confirmationString: String = 'Product is Added';
  isAdded: boolean;
  productObj: object = {};
  private headers = new Headers({ 'Contetn-Type': 'application/json' });

  addNewProduct = function(product) {
   this.productObj = {

    'name': product.name,
    'phonenumber': product.phonenumber,
    'duedate': product.duedate,
    'address': product.address

    }
  this.http.post('http://localhost:5555/products', this.productObj).subscribe((res: Response) => {
    this.isAdded = true;
  })
 
  ngOnInit() {
  }

}
}
