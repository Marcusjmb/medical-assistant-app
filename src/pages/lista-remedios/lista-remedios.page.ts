import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {MyPage} from "../pages";


import { ListRemedio } from "../../shared/shared";

@Component({
  templateUrl: 'lista-remedios.page.html'
})

export class ListaRemediosPage {

medicines: any [];
teste = [1,2,3];
receipts =[];


  constructor(public navCtrl: NavController,
            public navParams: NavParams,
            public listRemedio :ListRemedio) {

}
ionViewDidLoad(){
  this.receipts = this.listRemedio.receipts;
  console.log(this.receipts);
}

}

