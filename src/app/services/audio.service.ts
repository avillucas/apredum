import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { FilesystemDirectory } from '@capacitor/core';


@Injectable({
  providedIn: 'root'
})

export class AudioService {

  private sounds: Sound[] = [];
  private audioPlayer: HTMLAudioElement = new Audio();
  private forceWebAudio = false;
  private isNative = false;

    constructor(private platform: Platform, private nativeAudio: NativeAudio) {
      this.forceWebAudio = true;
        platform.ready().then(() => {
            if (platform.is('cordova')) {
                this.isNative = true;
            }
        });
    }

preloadFiles(){
    this.preload('es-pato', 'assets/animales/es/pato.mp3');
    this.preload('es-vaca', 'assets/animales/es/vaca.mp3');
    this.preload('es-caballo', 'assets/animales/es/caballo.mp3');
    this.preload('es-gallina', 'assets/animales/es/gallina.mp3');
    this.preload('es-chancho', 'assets/animales/es/chancho.mp3');
    this.preload('es-gallo', 'assets/animales/es/gallo.mp3');
    //
    this.preload('en-pato', 'assets/animales/en/pato.mp3');
    this.preload('en-vaca', 'assets/animales/en/vaca.mp3');
    this.preload('en-caballo', 'assets/animales/en/caballo.mp3');
    this.preload('en-gallina', 'assets/animales/en/gallina.mp3');
    this.preload('en-chancho', 'assets/animales/en/chancho.mp3');
    this.preload('en-gallo', 'assets/animales/en/gallo.mp3');
    //
    this.preload('pt-pato', 'assets/animales/pt/pato.mp3');
    this.preload('pt-vaca', 'assets/animales/pt/vaca.mp3');
    this.preload('pt-caballo', 'assets/animales/pt/caballo.mp3');
    this.preload('pt-gallina', 'assets/animales/pt/gallina.mp3');
    this.preload('pt-chancho', 'assets/animales/pt/chancho.mp3');
    this.preload('pt-gallo', 'assets/animales/pt/gallo.mp3');
    this.preload('es-rojo', 'assets/colores/es/rojo.mp3');
    this.preload('es-azul', 'assets/colores/es/azul.mp3');
    this.preload('es-amarillo', 'assets/colores/es/amarillo.mp3');
    this.preload('es-negro', 'assets/colores/es/negro.mp3');
    this.preload('es-verde', 'assets/colores/es/verde.mp3');
    this.preload('es-naranja', 'assets/colores/es/naranja.mp3');
    //
    this.preload('en-rojo', 'assets/colores/en/rojo.mp3');
    this.preload('en-azul', 'assets/colores/en/azul.mp3');
    this.preload('en-amarillo', 'assets/colores/en/amarillo.mp3');
    this.preload('en-negro', 'assets/colores/en/negro.mp3');
    this.preload('en-verde', 'assets/colores/en/verde.mp3');
    this.preload('en-naranja', 'assets/colores/en/naranja.mp3');
    //
    this.preload('pt-rojo', 'assets/colores/pt/rojo.mp3');
    this.preload('pt-azul', 'assets/colores/pt/azul.mp3');
    this.preload('pt-amarillo', 'assets/colores/pt/amarillo.mp3');
    this.preload('pt-negro', 'assets/colores/pt/negro.mp3');
    this.preload('pt-verde', 'assets/colores/pt/verde.mp3');
    this.preload('pt-naranja', 'assets/colores/pt/naranja.mp3');
    //
    this.preload('es-1', 'assets/numeros/es/1.mp3');
    this.preload('es-2', 'assets/numeros/es/2.mp3');
    this.preload('es-3', 'assets/numeros/es/3.mp3');
    this.preload('es-4', 'assets/numeros/es/4.mp3');
    this.preload('es-5', 'assets/numeros/es/5.mp3');
    this.preload('es-6', 'assets/numeros/es/6.mp3');
    //
    this.preload('en-1', 'assets/numeros/en/1.ogg');
    this.preload('en-2', 'assets/numeros/en/2.ogg');
    this.preload('en-3', 'assets/numeros/en/3.ogg');
    this.preload('en-4', 'assets/numeros/en/4.ogg');
    this.preload('en-5', 'assets/numeros/en/5.ogg');
    this.preload('en-6', 'assets/numeros/en/6.ogg');
    //
    this.preload('pt-1', 'assets/numeros/pt/1.ogg');
    this.preload('pt-2', 'assets/numeros/pt/2.ogg');
    this.preload('pt-3', 'assets/numeros/pt/3.ogg');
    this.preload('pt-4', 'assets/numeros/pt/4.ogg');
    this.preload('pt-5', 'assets/numeros/pt/5.ogg');
    this.preload('pt-6', 'assets/numeros/pt/6.ogg');
}

    
    preload(key: string, asset: string): void {
        //@todo completar
        asset ='http://avillucas.com.ar/facultad/'+asset;        
        if (!this.sounds.filter((sound) => sound.key === key).length) {
            if (this.isNative && !this.forceWebAudio) {
                this.platform.ready()
                    .then(() => this.nativeAudio.preloadSimple(key, asset),error=>console.error(error));
                this.sounds.push({
                    key: key,
                    asset: asset
                });
            } else {
                const audio = new Audio();
                audio.src = asset;
                this.sounds.push({
                    key: key,
                    asset: asset
                });
            }
        }
    }

    play(key: string): boolean {
        const soundToPlay: Sound = this.sounds.find((sound) => sound.key === key);

        if (soundToPlay) {
            if (this.isNative && !this.forceWebAudio) {
                this.platform.ready()
                    .then(() => this.nativeAudio.play(soundToPlay.key)
                        .then((res) => console.log(res),
                            (err) => console.error('play error', JSON.stringify(soundToPlay), err))
                    );
            } else {
                this.audioPlayer.src = soundToPlay.asset;
                this.audioPlayer.play()
                    .catch((error) => {console.error(error)}); // ignore web player errors
            }
            return true;
        } else {
            return false;
        }
    }

    getSounds() {
        return this.sounds;
    }
}

interface Sound {
  key: string;
  asset: string;
}