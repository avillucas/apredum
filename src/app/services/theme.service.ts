import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
const {Storage} = Plugins;

@Injectable({
  providedIn: 'root'
})

export class ThemeService {
  
  readonly STORAGE_NAME ='theme';
  
  readonly TAG_ANIMALES = 'animales';
  readonly TAG_COLORES = 'colores';
  readonly TAG_NUMEROS = 'numeros';
  readonly DEFAULT_THEME =this.TAG_COLORES;

  public theme:string;

  constructor() {     
    this.loadTheme();    
  }

  setTheme(theme:string){
    this.theme = theme;
    Storage.set({key:  this.STORAGE_NAME, value: theme});  
  }

  getTheme():string {
    return this.theme;
  }  
  
  setNumeros(){
    this.setTheme(this.TAG_NUMEROS);
  }


  setColores(){
    this.setTheme(this.TAG_COLORES);
  }

  setAnimales(){
    this.setTheme(this.TAG_ANIMALES);
  }

  isColor():boolean
  {
    return this.theme == this.TAG_COLORES;
  }

  isAnimal():boolean
  {
    return this.theme == this.TAG_ANIMALES;
  }

  isNumber():boolean
  {
    return this.theme == this.TAG_NUMEROS;
  }

  async loadTheme(){
    const {value} =  await Storage.get({ key: this.STORAGE_NAME });             
    if(value == undefined){
      this.setTheme(this.DEFAULT_THEME);
      this.theme = this.DEFAULT_THEME;
    }else{
      this.theme = value ;
    }        
  }
  
  cambiarColores(){
    this.setTheme(this.TAG_COLORES);
  }

  cambiarAAnimales(){
    this.setTheme(this.TAG_ANIMALES);
  }

  cambiarANumero(){
    this.setTheme(this.TAG_NUMEROS);
  }
}
