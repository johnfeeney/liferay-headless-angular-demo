import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {DetailsComponent} from './pages/details/details.component';
import {AddComponent} from './pages/add/add.component';
import {RawDataComponent} from './pages/raw-data/raw-data.component';
import {RenderedDataComponent} from './pages/rendered-data/rendered-data.component';
import {LocalisedDataComponent} from './pages/localised-data/localised-data.component';
import {LoginComponent} from './pages/login/login.component';
import {SignupComponent} from './pages/signup/signup.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'details/:city', component: DetailsComponent},
  {path: 'add', component: AddComponent},
  {path: 'raw-data', component: RawDataComponent},
  {path: 'rendered-data', component: RenderedDataComponent},
  {path: 'localised-data', component: LocalisedDataComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
