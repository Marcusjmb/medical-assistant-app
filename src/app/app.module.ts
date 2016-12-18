import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';
import { MyPage, RemediosPage, ReceitasPage, RemediosHomePage, ListaRemediosPage, PopOverRemedioPage  } from '../pages/pages';


@NgModule({
  declarations: [
    MyApp,
    MyPage,
    RemediosPage,
    ReceitasPage,
    RemediosHomePage,
    ListaRemediosPage,
    PopOverRemedioPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyPage,
    RemediosPage,
    ReceitasPage,
    RemediosHomePage,
    ListaRemediosPage,
    PopOverRemedioPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
