import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {MyPage, RemediosPage, ListaRemediosPage} from "../pages";


@Component({
  templateUrl: 'remediosHome.page.html'
})



export class RemediosHomePage {
remediosPage = RemediosPage;
listaRemediosPage = ListaRemediosPage;

  constructor(public navCtrl: NavController,
  public navParams: NavParams) {

}

}

