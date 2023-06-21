import { Component, OnInit } from '@angular/core';
import { FestivosService } from '../festivos.service';
import { CalendarOptions, DateSelectArg, EventClickArg } from '@fullcalendar/core';
import { ScrapingService } from '../scraping.service';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {

  constructor(private scrapingservice: ScrapingService) {
    this.scrapingservice.loadScript();



}
  ngOnInit(): void {
  }

}
