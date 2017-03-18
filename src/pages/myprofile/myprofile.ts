import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { ViewController } from 'ionic-angular';

import { Tabhome } from '../tabhome/tabhome';


@Component({
  selector: 'page-myprofile',
  templateUrl: 'myprofile.html'
})
export class Myprofile {
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public actionSheetCtrl: ActionSheetController,public viewCtrl:ViewController) {
    
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
  }
  
  changeImageToCall(){
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

  showHomePage(){
    //this.viewCtrl.dismiss();
    this.navCtrl.setRoot(Tabhome,{
      'message':'home'
    });
  }
}
