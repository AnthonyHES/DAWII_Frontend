import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BoletoService, Boleto } from '../boleto.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-boleto-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.html',
  styleUrls: ['./form.css']
})
export class BoletoFormComponent implements OnInit {
  boleto: Boleto = {
    vuelo: {}, usuario: {}, fechaCompra: '', asiento: '', precio: 0
  };
  editMode = false;

  constructor(
    private boletoService: BoletoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.editMode = !!id;

    if (this.editMode && id) {
      this.boletoService.obtener(+id).subscribe(b => this.boleto = b);
    }
  }

  guardar() {
    if (this.editMode && this.boleto.id) {
      this.boletoService.actualizar(this.boleto.id, this.boleto).subscribe(() => {
        this.router.navigate(['/boletos']);
      });
    } else {
      this.boletoService.crear(this.boleto).subscribe(() => {
        this.router.navigate(['/boletos']);
      });
    }
  }
}
