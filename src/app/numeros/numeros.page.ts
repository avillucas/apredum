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
    this.audio.preload('es-1', 'assets/numeros/es/1.mp3');
    this.audio.preload('es-2', 'assets/numeros/es/2.mp3');
    this.audio.preload('es-3', 'assets/numeros/es/3.mp3');
    this.audio.preload('es-4', 'assets/numeros/es/4.mp3');
    this.audio.preload('es-5', 'assets/numeros/es/5.mp3');
    this.audio.preload('es-6', 'assets/numeros/es/6.mp3');
    //
    this.audio.preload('en-1', 'assets/numeros/en/1.ogg');
    this.audio.preload('en-2', 'assets/numeros/en/2.ogg');
    this.audio.preload('en-3', 'assets/numeros/en/3.ogg');
    this.audio.preload('en-4', 'assets/numeros/en/4.ogg');
    this.audio.preload('en-5', 'assets/numeros/en/5.ogg');
    this.audio.preload('en-6', 'assets/numeros/en/6.ogg');
    //
    this.audio.preload('pt-1', 'assets/numeros/pt/1.ogg');
    this.audio.preload('pt-2', 'assets/numeros/pt/2.ogg');
    this.audio.preload('pt-3', 'assets/numeros/pt/3.ogg');
    this.audio.preload('pt-4', 'assets/numeros/pt/4.ogg');
    this.audio.preload('pt-5', 'assets/numeros/pt/5.ogg');
    this.audio.preload('pt-6', 'assets/numeros/pt/6.ogg');
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
