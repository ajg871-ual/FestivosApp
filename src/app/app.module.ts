import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { FestivosService } from './festivos.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { InicioComponent } from './inicio/inicio.component';
import { DetalleFestivoComponent } from './detalle-festivo/detalle-festivo.component';
import { CalendarModule } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FullCalendarModule } from '@fullcalendar/angular';
import { ScrapingService } from './scraping.service';
import { FechaHoraService } from './fecha-hora.service';
import { ScrapComponent } from './scrap/scrap.component'; // Importa el servicio FechaHoraService

@NgModule({
  declarations: [
    AppComponent,
    CalendarioComponent,
    SidebarComponent,
    InicioComponent,
    DetalleFestivoComponent,
    ScrapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FullCalendarModule

  ],
  providers: [
    FestivosService,
    FechaHoraService // Agrega el servicio FechaHoraService a la lista de proveedores
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
