import { Component } from '@angular/core';
import { LanguagesService } from '../services/languages.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  constructor(
    public languagesService:LanguagesService
  ) {
  }

  decirRojo(){
    this.decirColor('rojo');
  }

  decirAzul(){
    this.decirColor('azul');
  }

  decirAmarillo(){
    this.decirColor('amarillo');
  }

  decirNegro(){
    this.decirColor('negro');
  }

  decirBlanco(){
    this.decirColor('blanco');
  }

  decirColor(color){
    const idioma = this.languagesService.getIdioma();
    const path = 'assets/'+idioma+'/'+color+'.mp4';
    console.log(color);

    //todo cargar el audio

  }
}
