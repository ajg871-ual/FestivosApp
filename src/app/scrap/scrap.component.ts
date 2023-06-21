import { Component, OnInit } from '@angular/core';
import { ScrapingService } from '../scraping.service';

@Component({
  selector: 'app-scrap',
  templateUrl: './scrap.component.html',
  styleUrls: ['./scrap.component.css']
})
export class ScrapComponent implements OnInit {

  constructor(private scrapingService: ScrapingService) { }

  ngOnInit(): void {
    // Aquí puedes agregar el código o la lógica necesaria para el componente ScrapComponent
  }

}
