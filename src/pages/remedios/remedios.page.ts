import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';

import {MyPage, PopOverRemedioPage} from "../pages";
import * as _ from "lodash";

import { ListRemedio} from "../../shared/shared"

@Component({
  templateUrl: 'remedios.page.html'
})

export class RemediosPage {

medicines: any [];
teste = [1,2,3];
receipts = [];


  constructor(public navCtrl: NavController,
  public navParams: NavParams,
  public listRemedio: ListRemedio,
  public popOverCtrl: PopoverController) {
    this.receipts = this.listRemedio.receipts;

}

ionViewDidLoad(){
  this.initializeMedicines();
  this.receipts = this.listRemedio.receipts;
  console.log(this.receipts);
}
ionViewDidLeave(){
  this.listRemedio.receipts = this.receipts;
}


initializeMedicines() {
  this.medicines = [
  {nome:"Sorine", dosagem: [{tipo: "frasco", quantidade:[30], unidade:"ml"}],favorite:false, receipt: false},
  {nome:"Neosaldina", dosagem: [{ tipo: "frasco", quantidade:[15, 20], unidade:"ml"},{ tipo: "comprimido",quantidade:[300,200], unidade:"mg"}],favorite:false, receipt:false},
  {nome:"Flogoral", dosagem: [{ tipo: "frasco", quantidade:[15, 30], unidade:"ml"}, {"tipo": "comprimido", quantidade:150, unidade:"mg"}],favorite:false,receipt:false}
];

}
getMedicines($events){
  this.initializeMedicines();
  let val = $events.target.value;
if (val && val.trim() != '') {
        this.medicines = _.chain (this.medicines)
        .filter((m) => {
        return (m.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  addMedicines($event, medicine) {
    this.receipts.indexOf(medicine) === -1 ? this.receipts.push(medicine) : this.receipts.splice(this.receipts.indexOf(medicine),1);
    if (this.receipts.indexOf(medicine) != -1 ) {
      let popover = this.popOverCtrl.create(PopOverRemedioPage, medicine); 
      popover.present()
    } 
  }
}

