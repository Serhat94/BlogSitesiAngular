import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';




const routes: Routes = [

{
  //www.yazilimdeposu.com/
  path:"",
  component:MainLayoutComponent,
  children:            //children keywordden itibaren yazılan componentler MainLayoutComponent içerisinde gözükeceği anlamına geliyor
  [
    {
      path:"",
      component:HomeComponent
    },
      //www.yazilimdeposu.com/hakkimizda
    {
       path:"hakkimizda",
       component:AboutMeComponent
    },
    {
       //www.yazilimdeposu.com/iletisim
       path:"iletisim",
       component:ContactComponent
    }


  ]

}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
