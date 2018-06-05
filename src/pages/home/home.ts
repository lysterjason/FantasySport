import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  leagueName: string;

  constructor(public navCtrl: NavController,
              public db: AngularFireDatabase,
              ) {}

  addLeague(leagueName: string): void {
    const id = this.db.createPushId();

    this.db.object(`/leagues/${id}`).set(leagueName);
  }
}
