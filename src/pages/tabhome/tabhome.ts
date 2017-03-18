import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Home } from '../home/home';
import { Myprofile } from '../myprofile/myprofile';
import { Family } from '../family/family';
import { Posthome } from '../posthome/posthome';
/*
  Generated class for the Tabhome page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tabhome',
  templateUrl: 'tabhome.html'
})
export class Tabhome {

  tab1Root: any = Home;
  tab2Root: any = Posthome;
  tab3Root: any = Family;
  tab4Root: any = Myprofile;

  public showTab = true;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.showTab = true;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tabhome');
  }

}
