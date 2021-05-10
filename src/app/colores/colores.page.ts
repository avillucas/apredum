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
