import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PedidosListComponent } from './components/pedidos-list/pedidos-list.component';
import { PedidoFormComponent } from './components/pedido-form/pedido-form.component';
import { AppRoutingModule } from './app-routing.module';
import { PedidoUpdateComponent } from './components/pedido-update/pedido-update.component';

@NgModule({
  declarations: [
    AppComponent,
    PedidosListComponent,
    PedidoFormComponent,
    PedidoUpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
