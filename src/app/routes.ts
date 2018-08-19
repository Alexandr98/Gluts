import { LoginOrderComponent } from './shared/login-order/login-order.component';
import { MainContentComponent } from './shared/main-content/main-content.component';

export const routes: any = [
  {path: '', component: MainContentComponent},
  {path: 'login-order', component: LoginOrderComponent}
];
