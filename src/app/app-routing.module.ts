import {RouterModule, Routes} from '@angular/router'
import { NgModule } from '@angular/core'
import { HomePageComponent } from './pages/home-page/home-page.component'
import { ProductdetailPageComponent } from './pages/productdetail-page/productdetail-page.component'
import { AboutPageComponent } from './pages/about-page/about-page.component'
import { ContactPageComponent } from './pages/contact-page/contact-page.component'
import { ProductPageComponent } from './pages/product-page/product-page.component'
import { ErrorPageComponent } from './pages/error-page/error-page.component'
import { LoginPageComponent } from './pages/login-page/login-page.component'
import { RegisterPageComponent } from './pages/register-page/register-page.component'
import { AuthGurad } from './guard/auth.guard'

const routes: Routes=
[
{path:'', redirectTo:'home', pathMatch: 'full'},
    {path:'home', component:HomePageComponent, canActivate:[AuthGurad]},
    {path:'product', component:ProductPageComponent, canActivate:[AuthGurad]},
    {path:'product-detail/:id', component:ProductdetailPageComponent, canActivate:[AuthGurad]},
    {path:'about', component:AboutPageComponent, canActivate:[AuthGurad]},
    {path:'contact', component:ContactPageComponent, canActivate:[AuthGurad]},
    {path:'register', component:RegisterPageComponent},
    {path:'login', component:LoginPageComponent},
    {path:'**', component:ErrorPageComponent}

]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule
{

}
