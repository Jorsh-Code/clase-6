import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnoComponent } from './components/uno/uno.component';



const routes: Routes = [{
  path: '',
  children : [
    {
      path: '',
      redirectTo: 'get-character',
      pathMatch: 'full'
    },
    {
      path: 'get-character',
      component: UnoComponent
    },
    /*{
      path: '**',
      redirectTo: 'login'
    }*/
  ]
}];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnoRoutingModule { }
