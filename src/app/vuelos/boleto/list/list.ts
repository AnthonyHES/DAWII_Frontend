import { Component, OnInit } from '@angular/core';
import { BoletoService, Boleto } from '../boleto.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-boleto-list',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  templateUrl: './list.html',
  styleUrls: ['./list.css']
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
