import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  leagues$: Observable<any>
  leagueName: string;

  constructor(public navCtrl: NavController,
              public db: AngularFireDatabase,
              ) {}

  addLeague(leagueName: string): void {
    const id = this.db.createPushId();
    this.db.object(`/leagues/${id}`).set({
      name: leagueName,
      id: id, 
    });
  }

  getLeagues(): Observable<any> {
    return this.db.list(`/leagues`)
      .valueChanges();
  }

  ngOnInit(): void {
    this.leagues$ = this.getLeagues();
  }
}
   