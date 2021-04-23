import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
const {Storage} = Plugins;

@Injectable({
  providedIn: 'root'
})

export class LanguagesService {
  
  readonly STORAGE_NAME ='lang';
  readonly DEFAUL_LANG ='es';

  public lang:string;

  constructor() {     
    this.loadLang();    
  }

  setLang(lang:string){
    this.lang = lang;
    Storage.set({key:  this.STORAGE_NAME, value: lang});  
  }

  getIdioma():string {
    return this.lang;
  }

  getLanguageFlag():string {
    const ext = (this.getIdioma() == 'en') ? '.svg':'.png';
    return '/assets/banderas/'+this.getIdioma()+ext;
  }

  async loadLang(){
    const {value} =  await Storage.get({ key: this.STORAGE_NAME });             
    if(value == undefined){
      this.setLang(this.DEFAUL_LANG);
      this.lang = this.DEFAUL_LANG;
    }else{
      this.lang = value ;
    }        
  }
  
  cambiarAEs(){
    this.setLang('es');
  }

  cambiarAEn(){
    this.setLang('en');
  }

  cambiarAPt(){
    this.setLang('pt');
  }
}
