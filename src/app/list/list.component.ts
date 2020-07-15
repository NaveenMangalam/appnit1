import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  // listingData:Array<object>;
  listingData$:Observable<any>;
  listDtaa:object;
  dataV:any;
  constructor(private appService: AppService) {
   // this.listingData =[];
   }

  ngOnInit() {
    this.getListData();
  }
  getListData(){
    // this.appService.getData().subscribe(res =>{
    //   this.listingData = res;
    // })
    this.listingData$ = this.appService.getData();    
  }
}
