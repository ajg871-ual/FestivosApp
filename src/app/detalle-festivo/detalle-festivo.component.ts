import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FestivosService } from '../festivos.service';

@Component({
  selector: 'app-detalle-festivo',
  templateUrl: './detalle-festivo.component.html',
  styleUrls: ['./detalle-festivo.component.css']
})
export class DetalleFestivoComponent implements OnInit {
  festivo: any;

  constructor(private route: ActivatedRoute, private festivosService: FestivosService) { }

  ngOnInit(): void {
    const festivoId = this.route.snapshot.params['id'];
    this.festivosService.obtenerFestivos().subscribe(
      (data: any) => {
        this.festivo = data.response.holidays[festivoId];
      },
      error => {
        console.error(error);
      }
    );
  }
}
