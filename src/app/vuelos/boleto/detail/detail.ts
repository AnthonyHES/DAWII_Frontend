import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoletoService, Boleto } from '../boleto.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-boleto-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail.html',
  styleUrls: ['./detail.css']
})
export class BoletoDetailComponent implements OnInit {
  boleto?: Boleto;

  constructor(
    private boletoService: BoletoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.boletoService.obtener(+id).subscribe(data => this.boleto = data);
    }
  }
}
