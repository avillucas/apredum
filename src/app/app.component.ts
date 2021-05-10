import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { Plugins  } from '@capacitor/core';
import { AudioService } from './services/audio.service';
const {SplashScreen} = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,    
    private router:Router,
    private AudioService:AudioService
  ) {   
    this.initialiceApp();
  }

  initialiceApp(){
    this.AudioService.preloadFiles();
    SplashScreen.hide()
    this.platform.ready().then(()=>{
      this.router.navigateByUrl('splash');
    });
  }

}
