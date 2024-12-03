import { Component } from '@angular/core';
import { ElementoService } from '../services/elemento.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage {
  nuevoElemento = {
    title: '',
    body: ''
  };

  constructor(private elementoService: ElementoService, private navCtrl: NavController) {}

  agregarElemento() {
    if (this.nuevoElemento.title && this.nuevoElemento.body) {
      this.elementoService.agregarElemento(this.nuevoElemento).subscribe(data => {
        this.navCtrl.navigateBack('/home');
      });
    }
  }
}
