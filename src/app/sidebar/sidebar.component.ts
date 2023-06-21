import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ScrapingService } from '../scraping.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  horaEspana: string = '';

  constructor(private scrapingservice: ScrapingService) {
    this.scrapingservice.loadScript();



}
  ngOnInit(): void {
  }

}
