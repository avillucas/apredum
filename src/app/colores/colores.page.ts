import { Component, OnInit } from '@angular/core';
import { LanguagesService } from '../services/languages.service';
//import { AudioService } from '../services/audio.service';

@Component({
  selector: 'app-colores',
  templateUrl: './colores.page.html',
  styleUrls: ['./colores.page.scss'],
})
export class ColoresPage implements OnInit {

  constructor(
    public languagesService:LanguagesService,
  //  private audio: AudioService
  ) { }

  ngOnInit() {
   

  }
  ngAfterViewInit() {
    const idioma = 'es';
    const color = 'rojo';
  //  this.audio.preload('rojo-es', 'assets/colores/'+idioma+'/'+color+'.mp4');
  }

  decirRojo(){
   // this.audio.play('rojo-es');
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

  decirColor(color){    
    const idioma = this.languagesService.getIdioma();
    const id = idioma+'-'+color;
    const path = 'assets/'+idioma+'/'+color+'.mp4';    
    console.log(id)
  /*  this.nativeAudio.preloadSimple(id,path).then(
      res=>{console.info(res);},
       error=>{console.error(error);}
       );
       this.nativeAudio.play(id);
    //todo cargar el audio
*/
  }
}
