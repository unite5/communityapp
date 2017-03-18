import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
/*
  Generated class for the Modelfamily page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-modelfamily',
  templateUrl: 'modelfamily.html'
})
export class Modelfamily {

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModelfamilyPage');
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }

}
