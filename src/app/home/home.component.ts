import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  data:any
  product:any
  constructor(private dataservice : DataService ){

this.dataservice.product().subscribe((res)=>{
  console.log(res);
  this.product=res
  console.log(this.data);

})

// this.dataservice.data().subscribe((res)=>{
//   console.log(res);
//   this.data=res
//   console.log(this.data);




  }
  ngOnInit(): void {


  }

}

// this.service.data().subscribe((response)=>{
//   console.log("res" , response);
//  this.data = response
