import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FestivosService } from '../festivos.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  festivos: any[] = [];

  constructor(private router: Router, private festivosService: FestivosService) { }

  ngOnInit(): void {
    this.festivosService.obtenerFestivos().subscribe(
      (data: any) => {
        this.festivos = data.response.holidays;
      },
      error => {
        console.error(error);
      }
    );
  }

  verDetalleFestivo(id: string): void {
    this.router.navigate(['/festivo', id]);
  }
}
