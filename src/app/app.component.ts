import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { MyPage, ReceitasPage, RemediosHomePage } from '../pages/pages';
import {ListRemedio } from'../shared/shared';

@Component({
  templateUrl: 'app.html',
  providers: [ListRemedio]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = MyPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'My Home', component: MyPage },
      { title: 'Remedios', component: RemediosHomePage },
      { title: 'Receitas', component: ReceitasPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
