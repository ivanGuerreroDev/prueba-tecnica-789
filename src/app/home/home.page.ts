import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ElementoService } from '../services/elemento.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  elementos: any[] = [];

  constructor(private elementoService: ElementoService, private navCtrl: NavController) {}

  ngOnInit() {
    this.obtenerElementos();
  }

  obtenerElementos() {
    this.elementoService.getElementos().subscribe(data => {
      this.elementos = data;
    });
  }

  verDetalle(id: number) {
    this.navCtrl.navigateForward(`/detalle/${id}`);
  }

  agregarElemento() {
    this.navCtrl.navigateForward('/agregar');
  }
}
