import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';

import { Tabhome } from '../tabhome/tabhome';

/*
  Generated class for the Posthome page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-posthome',
  templateUrl: 'posthome.html'
})
export class Posthome {

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController,public actionSheetCtrl: ActionSheetController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PosthomePage');
  }

  showHomePage(){
    this.viewCtrl.dismiss();
    this.navCtrl.setRoot(Tabhome,{
      'message':'home'
    });
  }

  chooseImageOption() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Upload Image For The Post',
      buttons: [
        {
          text: 'Gallery',
          handler: () => {
            console.log('gallery clicked');
          }
        },{
          text: 'Camera',
          handler: () => {
            console.log('camera clicked');
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

}
