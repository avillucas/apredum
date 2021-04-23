import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LanguagesService } from '../services/languages.service';
import { AuthapiService } from '../services/authapi.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(
    private router:Router,
    private languagesService:LanguagesService,
    private authService: AuthapiService, 
  ) { }

  ngOnInit() {
  }

  setEs(){
    this.languagesService.cambiarAEs();
  }

  setEn(){
    this.languagesService.cambiarAEn();
  }

  setPt(){
    this.languagesService.cambiarAPt();
  }
  setColores(){
    this.router.navigateByUrl('dashboard/colores');
  }

  setAnimales(){
    this.router.navigateByUrl('dashboard/animales');
  }

  setNumeros(){
    this.router.navigateByUrl('dashboard/numeros');
  }
 
  async logout() {
    await this.authService.logout();
    this.router.navigateByUrl('/login', { replaceUrl: true });
  }
}
