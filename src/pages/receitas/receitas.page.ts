import { Component} from '@angular/core';
import { NavController } from 'ionic-angular';


import {MyPage} from "../pages";

declare var pdfMake: any;

@Component({
  templateUrl: 'receitas.page.html',
})

export class ReceitasPage {

doc: any;
pdf: any;


  constructor(public navCtrl: NavController) {

}

ionViewDidLoad(){

}
buildPdf() {
 let pdfContent = {
        content: [
		{ 
			stack: [
				'Dr Felipe Campos',
				{ text: 'CRM: xxxxxxxxx', style: 'subheader' },
			],
			style: 'header'
		},
		{ 
			stack: [
				'Paciente: Dona Gertrudes'
			],
			style: 'header2'
		},
				{
						style: 'tableExample',
						table: {
								headerRows: 1,
								body: [
										[{ text: '#', style: 'tableHeader' }, { text: 'Medicamento', style: 'tableHeader'}, { text: 'Qtd', style: 'tableHeader' }, { text: 'Periodo', style: 'tableHeader' }],
										[ '#1', 'Remédio A', '1 cp apos almoco', "durante 1 semana" ],
										[ '#2', 'Remedio B', '1 cp 2x ao dia', "durante 10 dias"],
										[ '#3', 'Remedio C', '20 gotas 3x ao dia', "durante x dias"],
										[ '#4', 'Remedio D', '5ml antes de dormir', ""],
										[ '#5', 'Remedio E', '1 cp ap acprdar', "o ano todo"],
								]
						},
						layout: 'lightHorizontalLines'
				},
	{ text: 'Niteroi, xx, de mmmm de yyyy', fontSize: 14, bold: true, margin: [0, 120, 0, 8], alignment: "right"},	
	],
	styles: {
		header: {
			fontSize: 18,
			bold: true,
			alignment: 'right',
			margin: [0,90,0,80]		
		},
		subheader: {
			fontSize: 14
		},
				header2: {
			fontSize: 14,
			bold: true,
			alignment: 'left',
			margin: [0,10,0,20]		
		},

		superMargin: {
			margin: [20, 0, 40, 0],
			fontSize: 15,
		},
		tableHeader:{
		    bold: true,
		    alignment: "justify"
		}
	}

}
    
 console.log(pdfContent);
 return(pdfContent);
}
openPdf() {
        this.pdf = pdfMake;
        this.pdf.createPdf(this.buildPdf()).open();
    }

}

