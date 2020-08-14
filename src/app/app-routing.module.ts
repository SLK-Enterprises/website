import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { DthProviderComponent } from './dth-provider/dth-provider.component';

const routes: Routes = [
  { path: '', component: ViewComponent },
  { path: 'home', component: ViewComponent },
  { path: 'dth-provider', component: DthProviderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
