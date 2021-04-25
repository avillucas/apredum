import { Component, OnInit } from '@angular/core';
import { LanguagesService } from '../services/languages.service';
import { AudioService } from '../services/audio.service';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.page.html',
  styleUrls: ['./numeros.page.scss'],
})
export class NumerosPage implements OnInit {

  constructor(
    public languagesService:LanguagesService,
    public audio:AudioService
  ) { }

 
  ngOnInit() {
  }


  ngAfterViewInit() {
    this.audio.preload('es-1', 'assets/colores/es/1.mp4');
    this.audio.preload('es-2', 'assets/colores/es/2.mp4');
    this.audio.preload('es-3', 'assets/colores/es/3.mp4');
    this.audio.preload('es-4', 'assets/colores/es/4.mp4');
    this.audio.preload('es-5', 'assets/colores/es/5.mp4');
    this.audio.preload('es-6', 'assets/colores/es/6.mp4');
    //
    this.audio.preload('en-1', 'assets/colores/en/1.mp4');
    this.audio.preload('en-2', 'assets/colores/en/2.mp4');
    this.audio.preload('en-3', 'assets/colores/en/3.mp4');
    this.audio.preload('en-4', 'assets/colores/en/4.mp4');
    this.audio.preload('en-5', 'assets/colores/en/5.mp4');
    this.audio.preload('en-6', 'assets/colores/en/6.mp4');
    //
    this.audio.preload('pt-1', 'assets/colores/pt/1.mp4');
    this.audio.preload('pt-2', 'assets/colores/pt/2.mp4');
    this.audio.preload('pt-3', 'assets/colores/pt/3.mp4');
    this.audio.preload('pt-4', 'assets/colores/pt/4.mp4');
    this.audio.preload('pt-5', 'assets/colores/pt/5.mp4');
    this.audio.preload('pt-6', 'assets/colores/pt/6.mp4');
  }
  
  decirUno(){
    this.decirNumero(1);
  }

  decirDos(){
    this.decirNumero(2);
  }
  decirTres(){
    this.decirNumero(3);
  }
  decirCuatro(){
    this.decirNumero(4);
  }
  decirCinco(){
    this.decirNumero(5);
  }
  decirSeis(){
    this.decirNumero(6);
  }
  
  protected decirNumero(numero:number){        
    this.audio.play(this.languagesService.getIdioma()+'-'+numero);  
  }

}
