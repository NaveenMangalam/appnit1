import { Component, OnInit, DoCheck } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
slug:string;
// getProduct:object;
getProduct$:Observable<any>;
  constructor(private router: ActivatedRoute, private appService: AppService) {
      this.slug='';
      //this.getProduct ={};
   }

  ngOnInit() {    
    this.slug = this.router.snapshot.paramMap.get('id');
    this.getProductData();
  }

  getProductData(){
    // this.appService.getProductData(this.slug).subscribe(res=>{
    //   this.getProduct = res;
    // })
    this.getProduct$ = this.appService.getProductData(this.slug);
  }
}
