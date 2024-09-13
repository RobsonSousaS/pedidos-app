import { Component, OnInit } from '@angular/core';
import { Pedido, PedidoService } from 'src/app/services/pedido.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedidos-list',
  templateUrl: './pedidos-list.component.html',
  styleUrls: ['./pedidos-list.component.css'],
})
export class PedidosListComponent implements OnInit {
  pedidos: Pedido[] = [];
  pedidoIdToDelete?: number;

  constructor(
    private pedidoService: PedidoService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.loadPedidos();
  }

  loadPedidos(): void {
    this.pedidoService.getPedidos().subscribe({
      next: (pedidos) => this.pedidos = pedidos,
      error: (err) => console.error('Erro ao carregar pedidos', err)
    });
  }

  openModal(id: number | undefined): void {
    if (id !== undefined) {
      this.pedidoIdToDelete = id;
      document.getElementById('confirmModal')!.style.display = 'block';
    } else {
      console.error('ID do pedido não definido');
    }
  }
  

  closeModal(): void {
    document.getElementById('confirmModal')!.style.display = 'none';
    this.pedidoIdToDelete = undefined;
  }

  confirmDelete(): void {
    if (this.pedidoIdToDelete === undefined) {
      console.error('ID do pedido não definido');
      return;
    }
    this.pedidoService.deletePedido(this.pedidoIdToDelete).subscribe({
      next: () => {
        this.pedidos = this.pedidos.filter((p) => p.id !== this.pedidoIdToDelete);
        this.closeModal();
      },
      error: (err) => {
        console.error('Erro ao remover pedido', err);
        this.closeModal();
      }
    });
  }

  updatePedido(id?: number): void {
    if (id === undefined) {
      console.error('ID do pedido não definido');
      return;
    }
    this.router.navigate(['/atualizar-pedido', id]);
  }
}
