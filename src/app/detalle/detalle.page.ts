import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ElementoService } from '../services/elemento.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {
  elemento: any;

  constructor(
    private route: ActivatedRoute,
    private elementoService: ElementoService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.obtenerDetalle(id);
    }
  }

  obtenerDetalle(id: string) {
    this.elementoService.getElementos().subscribe(data => {
      this.elemento = data.find(item => item.id === parseInt(id, 10));
    });
  }
}
