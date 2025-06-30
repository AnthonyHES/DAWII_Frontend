import { Routes } from '@angular/router';
import { App } from './app';
import { Boleto } from './vuelos/boleto/boleto';
import { BoletoListComponent } from './vuelos/boleto/list/list';
import { BoletoFormComponent } from './vuelos/boleto/form/form';
import { BoletoDetailComponent } from './vuelos/boleto/detail/detail';


export const routes: Routes = [
  { path: 'boletos', component: BoletoListComponent },
  { path: 'boletos/nuevo', component: BoletoFormComponent },
  { path: 'boletos/editar/:id', component: BoletoFormComponent },
  { path: 'boletos/detalle/:id', component: BoletoDetailComponent }
];
