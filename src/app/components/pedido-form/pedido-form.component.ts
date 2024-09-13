import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PedidoService } from 'src/app/services/pedido.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pedido-form',
  templateUrl: './pedido-form.component.html',
  styleUrls: ['./pedido-form.component.css'],
})
export class PedidoFormComponent {
  pedido = {
    cliente: '',
    mesa: 1,
    items: [] as { nome: string; quantidade: number }[],
    status: 'Em preparo'
  };

  constructor(
    private pedidoService: PedidoService,
    private router: Router,
    private location: Location
  ) {}

  addItem(): void {
    this.pedido.items.push({ nome: '', quantidade: 1 });
  }
  
  removeItem(index: number): void {
    if (index >= 0 && index < this.pedido.items.length) {
      this.pedido.items.splice(index, 1);
    }
  }

  addPedido(): void {
    if (this.isFormValid()) {
      this.pedidoService.addPedido(this.pedido).subscribe(() => {
        this.goBack();
      });
    } else {
      alert('Por favor, preencha todos os campos corretamente.');
    }
  }

  isFormValid(): boolean {
    const clientePreenchido: boolean = this.pedido.cliente ? this.pedido.cliente.trim().length > 0 : false;
    const mesaPreenchida: boolean = this.pedido.mesa > 0;
    const itemsPreenchidos: boolean = this.pedido.items.length > 0 && this.pedido.items.every(item => item.nome.trim().length > 0 && item.quantidade > 0);
    const statusPreenchido: boolean = this.pedido.status ? this.pedido.status.trim().length > 0 : false;
  
    return clientePreenchido && mesaPreenchida && itemsPreenchidos && statusPreenchido;
  }
  
  

  goBack(): void {
    this.location.back();
  }
}
