import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PedidoService, Pedido } from 'src/app/services/pedido.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pedido-update',
  templateUrl: './pedido-update.component.html',
  styleUrls: ['./pedido-update.component.css'],
})
export class PedidoUpdateComponent implements OnInit {
  pedido: Pedido = {
    cliente: '',
    mesa: 1,
    items: [{ nome: '', quantidade: 1 }],
    status: 'Em preparo',
  };

  constructor(
    private pedidoService: PedidoService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getPedido();
  }

  goBack(): void {
    this.location.back();
  }

  getPedido(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pedidoService.getPedido(id).subscribe((pedido) => (this.pedido = pedido));
  }

  updatePedido(): void {
    if (this.isFormValid()) {
      this.pedidoService.updatePedido(this.pedido).subscribe(() => {
        this.router.navigate(['/pedidos']);
      });
    } else {
      alert('Por favor, preencha todos os campos corretamente.');
    }
  }

  isFormValid(): boolean {
    const clientePreenchido = typeof this.pedido.cliente === 'string' && this.pedido.cliente.trim().length > 0;
    const mesaPreenchida = typeof this.pedido.mesa === 'number' && this.pedido.mesa > 0;
    const itensPreenchidos = this.pedido.items.length > 0 && this.pedido.items.every(item => 
      typeof item.nome === 'string' && item.nome.trim().length > 0 &&
      typeof item.quantidade === 'number' && item.quantidade > 0
    );
    const statusPreenchido = typeof this.pedido.status === 'string' && this.pedido.status.trim().length > 0;

    return clientePreenchido && mesaPreenchida && itensPreenchidos && statusPreenchido;
  }

  addItem(): void {
    this.pedido.items.push({ nome: '', quantidade: 1 });
  }

  removeItem(index: number): void {
    if (this.pedido.items.length > 1) {
      this.pedido.items.splice(index, 1);
    } else {
      alert('Pelo menos um item deve ser mantido.');
    }
  }
}
