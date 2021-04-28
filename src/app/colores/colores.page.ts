import { Component, OnInit } from '@angular/core';
import { LanguagesService } from '../services/languages.service';
import { AudioService } from '../services/audio.service';

@Component({
  selector: 'app-colores',
  templateUrl: './colores.page.html',
  styleUrls: ['./colores.page.scss'],
})
export class ColoresPage implements OnInit {

  constructor(
    public languagesService:LanguagesService,
    private audio: AudioService
  ) { }

  ngOnInit() {
   

  }
  ngAfterViewInit() {
    this.audio.preload('es-rojo', 'assets/colores/es/rojo.mp3');
    this.audio.preload('es-azul', 'assets/colores/es/azul.mp3');
    this.audio.preload('es-amarillo', 'assets/colores/es/amarillo.mp3');
    this.audio.preload('es-negro', 'assets/colores/es/negro.mp3');
    this.audio.preload('es-verde', 'assets/colores/es/verde.mp3');
    this.audio.preload('es-naranja', 'assets/colores/es/naranja.mp3');
    //
    this.audio.preload('en-rojo', 'assets/colores/en/rojo.ogg');
    this.audio.preload('en-azul', 'assets/colores/en/azul.ogg');
    this.audio.preload('en-amarillo', 'assets/colores/en/amarillo.ogg');
    this.audio.preload('en-negro', 'assets/colores/en/negro.ogg');
    this.audio.preload('en-verde', 'assets/colores/en/verde.ogg');
    this.audio.preload('en-naranja', 'assets/colores/en/naranja.ogg');
    //
    this.audio.preload('pt-rojo', 'assets/colores/pt/rojo.ogg');
    this.audio.preload('pt-azul', 'assets/colores/pt/azul.ogg');
    this.audio.preload('pt-amarillo', 'assets/colores/pt/amarillo.ogg');
    this.audio.preload('pt-negro', 'assets/colores/pt/negro.ogg');
    this.audio.preload('pt-verde', 'assets/colores/pt/verde.ogg');
    this.audio.preload('pt-naranja', 'assets/colores/pt/naranja.ogg');
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

  decirVerde(){
    this.decirColor('verde');
  }

  decirNaranja(){
    this.decirColor('naranja');
  }
  
  protected decirColor(color){        
    this.audio.play(this.languagesService.getIdioma()+'-'+color);  
  }

}
