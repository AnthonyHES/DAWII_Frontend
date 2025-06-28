import { Component, OnInit } from '@angular/core';
import { BoletoService, Boleto } from '../boleto.service';

@Component({
  selector: 'app-boleto-list',
  templateUrl: './list.html'
})
export class BoletoListComponent implements OnInit {
  boletos: Boleto[] = [];

  constructor(private boletoService: BoletoService) {}

  ngOnInit(): void {
    this.boletoService.listarTodos().subscribe(data => this.boletos = data);
  }

  eliminar(id: number) {
    this.boletoService.cancelar(id).subscribe(() => {
      this.boletos = this.boletos.filter(b => b.id !== id);
    });
  }
}
