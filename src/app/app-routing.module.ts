import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { FuocoComponent } from './fuoco/fuoco.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'fuokkok', component: FuocoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
