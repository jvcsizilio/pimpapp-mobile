import { PerfilCatador } from './../pages/perfil-catador/perfil-catador';
import { StorageService } from './../pages/storage-service';
import { Feedback } from './../pages/feedback/feedback';
import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { TabsPage } from './../pages/tabs/tabs';
import { Storage } from '@ionic/storage';
import { LandingPage } from './../pages/landing/landing';

@Component({
  templateUrl: 'app.html',
})
export class MyApp {
  @ViewChild('c') nav: NavController;

  rootPage:any;
  public menu: MenuController;

  constructor(platform: Platform, statusBar: StatusBar, 
    public menuCtrl: MenuController, public storage: Storage,
    public storageService: StorageService
  ) {
      platform.ready().then(() => {
        statusBar.styleDefault();
        this.checkLandingFirstTime();
      });
  }

  checkLandingFirstTime(){
      this.storage.ready().then(() => {
            this.storage.get('firstAccess').then((val) => {
                if (val===1)
                    this.rootPage = PerfilCatador;
                else{
                    this.rootPage = LandingPage;
                    this.storage.set('firstAccess', 1);
                }
            })
        });
  }

  openPage(page){
    switch (page) {
      case 'feedback':
      this.nav.push(Feedback);
      this.menuCtrl.close();
      break;
    }
  }
}

