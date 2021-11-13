import { Component, OnInit } from '@angular/core';
import { PedidosService } from 'src/app/services/pedido/pedido.service';

@Component({
  selector: 'app-admin-pedidos',
  templateUrl: './admin-pedidos.component.html',
  styleUrls: ['./admin-pedidos.component.css']
})
export class AdminPedidosComponent implements OnInit {
  orders: any;

  constructor(private orderService: PedidosService) { }

  ngOnInit() {
    this.orderService.getOrders()
      .subscribe(orders => this.orders = orders);
  }

}
