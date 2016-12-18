import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {RemediosHomePage, ReceitasPage} from "../pages";
import { ListRemedio} from "../../shared/shared";

@Component({
  templateUrl: 'my-page.page.html'
})
export class MyPage {

  constructor(public navCtrl: NavController,
              public listRemedio: ListRemedio) {
    
  }
  remediosPageTapped() {
      this.listRemedio.receipts = [];
    this.navCtrl.push(RemediosHomePage);
  }
    receitasPageTapped() {
    this.navCtrl.push(ReceitasPage);
  }


}
