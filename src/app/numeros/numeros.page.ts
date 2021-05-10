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
