import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Icategory } from 'src/app/Models/category.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
categories?: Icategory[];

constructor(private dataservice : DataService, private router:Router){

  this.dataservice.getcategory().subscribe((response:Icategory[])=>
  {
this.categories=response;
  })

}
onclickhandler()
{
 this.router.navigate(['/product'])
}
}
