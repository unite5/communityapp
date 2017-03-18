import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Home } from '../pages/home/home';
import { Myprofile } from '../pages/myprofile/myprofile';
import { Tabhome } from '../pages/tabhome/tabhome';
import { Family } from '../pages/family/family';
import { Modelfamily } from '../pages/modelfamily/modelfamily';
import { Posthome } from '../pages/posthome/posthome';

@NgModule({
  declarations: [
    MyApp,
    Home,
    Myprofile,
    Tabhome,
    Family,
    Modelfamily,
    Posthome
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Home,
    Myprofile,
    Tabhome,
    Family,
    Modelfamily,
    Posthome
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
