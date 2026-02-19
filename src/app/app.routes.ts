import {Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {PublicationsComponent} from './pages/publications/publications.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'publications', component: PublicationsComponent}
];
