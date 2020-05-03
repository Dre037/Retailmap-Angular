import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApresentationComponent } from './apresentation/apresentation.component';
import { StoreComponent } from './store/store.component';
import { ClientComponent } from './client/client.component';


const routes: Routes = [
  {path: '', component: ApresentationComponent},
  {path: 'client', component: ClientComponent},
  {path: 'store:{id}', component: StoreComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
