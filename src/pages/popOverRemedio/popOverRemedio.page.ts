import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

import {MyPage} from "../pages";


@Component({
  templateUrl: 'popOverRemedio.page.html'
})

export class PopOverRemedioPage {
popOverRemedio : any;

constructor(public viewCtrl: ViewController,
public params:NavParams) {
  this.popOverRemedio = this.params.data;  
  console.log(this.popOverRemedio)
  console.log(this.popOverRemedio.dosagem)
}

  close() {
    this.viewCtrl.dismiss();
  }



}

