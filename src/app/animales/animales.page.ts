import { Component, OnInit } from '@angular/core';
import { AudioService } from '../services/audio.service';
import { LanguagesService } from '../services/languages.service';

@Component({
  selector: 'app-animales',
  templateUrl: './animales.page.html',
  styleUrls: ['./animales.page.scss'],
})
export class AnimalesPage implements OnInit {

  constructor(
    public audio:AudioService,
    public languagesService:LanguagesService
  ) { }

  ngOnInit() {
  }
  
  ngAfterViewInit() {
    this.audio.preload('es-pato', 'assets/animales/es/pato.mp3');
    this.audio.preload('es-vaca', 'assets/animales/es/vaca.mp3');
    this.audio.preload('es-caballo', 'assets/animales/es/caballo.mp3');
    this.audio.preload('es-gallina', 'assets/animales/es/gallina.mp3');
    this.audio.preload('es-chancho', 'assets/animales/es/chancho.mp3');
    this.audio.preload('es-gallo', 'assets/animales/es/gallo.mp3');
    //
    this.audio.preload('en-pato', 'assets/animales/en/pato.mp3');
    this.audio.preload('en-vaca', 'assets/animales/en/vaca.mp3');
    this.audio.preload('en-caballo', 'assets/animales/en/caballo.mp3');
    this.audio.preload('en-gallina', 'assets/animales/en/gallina.mp3');
    this.audio.preload('en-chancho', 'assets/animales/en/chancho.mp3');
    this.audio.preload('en-gallo', 'assets/animales/en/gallo.mp3');
    //
    this.audio.preload('pt-pato', 'assets/animales/pt/pato.mp3');
    this.audio.preload('pt-vaca', 'assets/animales/pt/vaca.mp3');
    this.audio.preload('pt-caballo', 'assets/animales/pt/caballo.mp3');
    this.audio.preload('pt-gallina', 'assets/animales/pt/gallina.mp3');
    this.audio.preload('pt-chancho', 'assets/animales/pt/chancho.mp3');
    this.audio.preload('pt-gallo', 'assets/animales/pt/gallo.mp3');
  }
  decirPato(){ 
    this.decirAnimal('pato');
  } 

  decirChancho(){
    this.decirAnimal('chancho');
  }

  decirCaballo(){
    this.decirAnimal('caballo');
  }

  decirGallina(){
    this.decirAnimal('gallina');
  }

  decirVaca(){
    this.decirAnimal('vaca');
  }

  decirGallo(){
    this.decirAnimal('gallo');
  }
    
  protected decirAnimal(animal:string){        
    this.audio.play(this.languagesService.getIdioma()+'-'+animal);  
  }

}
