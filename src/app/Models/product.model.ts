import { Icategory } from "./category.model";

export interface Iproduct
{
    id:number;
    title:string;
    price:number;
    description:string;
    category:Icategory;
    image:[string];

}





