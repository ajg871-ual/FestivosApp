import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarioComponent } from './calendario/calendario.component';
import { InicioComponent } from './inicio/inicio.component';
import { DetalleFestivoComponent } from './detalle-festivo/detalle-festivo.component';
import { ScrapComponent } from './scrap/scrap.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'calendario', component: CalendarioComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'festivo/:id', component: DetalleFestivoComponent },
  { path: 'scrap', component: ScrapComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
