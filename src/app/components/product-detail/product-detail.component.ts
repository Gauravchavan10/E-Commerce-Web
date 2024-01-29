import { Component } from '@angular/core';
import { Iproduct } from 'src/app/Models/product.model';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  id:any
product?:Iproduct

constructor(private dataservice : DataService, private activateroute:ActivatedRoute)
{
  this.id=this.activateroute.snapshot.paramMap.get('id');
  this.dataservice.getproductbyid(this.id).subscribe((respnse : Iproduct)=>
  {
    this.product=respnse;
    console.log(respnse)
  })
}
}
