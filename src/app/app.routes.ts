import {Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {TestComponent} from './pages/test/test.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'test', component: TestComponent}
];
