import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidosListComponent } from './components/pedidos-list/pedidos-list.component';
import { PedidoFormComponent } from './components/pedido-form/pedido-form.component';
import { PedidoUpdateComponent } from './components/pedido-update/pedido-update.component';

const routes: Routes = [
    { path: '', redirectTo: '/pedidos', pathMatch: 'full' },
    { path: 'pedidos', component: PedidosListComponent },
    { path: 'novo-pedido', component: PedidoFormComponent },
    { path: 'atualizar-pedido/:id', component: PedidoUpdateComponent }
  ];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
