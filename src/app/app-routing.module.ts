import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenusComponent } from './menus/menus.component';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { UpdateMenuComponent } from './update-menu/update-menu.component';
import { RechercheParRestaurantComponent } from './recherche-par-restaurant/recherche-par-restaurant.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { MenuGuard } from './menu.guard';

const routes: Routes = [
  {path: "menus", component : MenusComponent},
  {path: "add-menu", component : AddMenuComponent, canActivate:[MenuGuard]},
  {path: "", redirectTo: "menus", pathMatch: "full" },
  {path: "updateMenu/:id", component: UpdateMenuComponent},
  {path: "rechercheParRestaurant", component : RechercheParRestaurantComponent},
  {path: "rechercheParNom", component : RechercheParNomComponent},
  {path: 'login', component: LoginComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
