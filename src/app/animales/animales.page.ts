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
    this.audio.preload('es-pato', 'assets/colores/es/pato.mp4');
    this.audio.preload('es-vaca', 'assets/colores/es/vaca.mp4');
    this.audio.preload('es-caballo', 'assets/colores/es/caballo.mp4');
    this.audio.preload('es-gallina', 'assets/colores/es/gallina.mp4');
    this.audio.preload('es-chancho', 'assets/colores/es/chancho.mp4');
    this.audio.preload('es-gallo', 'assets/colores/es/gallo.mp4');
    //
    this.audio.preload('en-pato', 'assets/colores/en/pato.mp4');
    this.audio.preload('en-vaca', 'assets/colores/en/vaca.mp4');
    this.audio.preload('en-caballo', 'assets/colores/en/caballo.mp4');
    this.audio.preload('en-gallina', 'assets/colores/en/gallina.mp4');
    this.audio.preload('en-chancho', 'assets/colores/en/chancho.mp4');
    this.audio.preload('en-gallo', 'assets/colores/en/gallo.mp4');
    //
    this.audio.preload('pt-pato', 'assets/colores/pt/pato.mp4');
    this.audio.preload('pt-vaca', 'assets/colores/pt/vaca.mp4');
    this.audio.preload('pt-caballo', 'assets/colores/pt/caballo.mp4');
    this.audio.preload('pt-gallina', 'assets/colores/pt/gallina.mp4');
    this.audio.preload('pt-chancho', 'assets/colores/pt/chancho.mp4');
    this.audio.preload('pt-gallo', 'assets/colores/pt/gallo.mp4');
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
