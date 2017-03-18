import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { Home } from '../pages/home/home';
import { Myprofile } from '../pages/myprofile/myprofile';
import { Tabhome } from '../pages/tabhome/tabhome';
import { Family } from '../pages/family/family';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Tabhome;

  pages: Array<{icon:string, title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { icon:'home', title: 'Home', component: Tabhome },
      { icon:'color-filter', title: 'Family', component: Family },
      { icon:'american-football', title: 'Achievements', component: Myprofile },
      { icon:'chatbubbles', title: 'Chat', component: Myprofile },
      { icon:'aperture', title: 'Compaign', component: Myprofile },
      { icon:'contact', title: 'Me', component: Myprofile },
      { icon:'logo-freebsd-devil', title: 'About', component: Myprofile },
      { icon:'book', title: 'Privacy Policy', component: Myprofile }
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
