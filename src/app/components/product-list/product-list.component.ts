import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Iproduct } from 'src/app/Models/product.model';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
products:Iproduct[]=[];
constructor(private dataservice:DataService, private router:Router)
{
  this.dataservice.getproduct().subscribe((response:Iproduct[])=>
  {
    this.products=response;
  })
}
onclickhandler(id:number)
{
  this.router.navigate(['/product-detail',id])
}
}
