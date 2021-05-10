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
