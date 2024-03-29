import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { toPromise } from 'rxjs/operators/toPromise';


@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  id: number;
  data: object = {};
  products = [];
  productObj: object = {};

  constructor(private router: Router, private route: ActivatedRoute, private http: Http) { }

  updateProduct(product) {
    this.productObj = {
    'name': product.name,
    'phonenumber': product.phonenumber,
    'duedate': product.duedate,
    'address': product.address
    };
    const url = '${"http://localhost:5555/products"}/${this.id}';
    this.http.put(url, JSON.stringify(this.productObj), {headers: this.headers})
    .toPromise()
    .then(() => { this.router.navigate(['/']);
  })

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.http.get('http://localhost:5555/products').subscribe(
    (res: Response) => {
        this.products = res.json();
        for(var i = 0; i < this.products.length ; i++) {
            if(parseInt(this.products[i].id) === this.id) {
              this.data = this.products[i];
              break;
            }
        }
    }
  )
  }

}
