import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';

import { Family } from '../family/family';
import { Tabhome } from '../tabhome/tabhome'; 
import { Modelfamily } from '../modelfamily/modelfamily';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class Home {

  constructor(public navCtrl: NavController,public modalCtrl:ModalController) {
    
  }

  seefamily(){
   let model = this.modalCtrl.create(Modelfamily);
   model.present();
  }

}
