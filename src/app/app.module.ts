import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { LeaguesPage } from '../pages/leagues/leagues';
import { SettingsPage } from '../pages/settings/settings';
import { ProfilePage } from '../pages/profile/profile';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, } from 'angularfire2/database';

export const firebaseConfig = {
    apiKey: "AIzaSyCOPDe8_PIsgPIZABBXfou4v95XM3yvTBQ",
    authDomain: "statgen-993f4.firebaseapp.com",
    databaseURL: "https://statgen-993f4.firebaseio.com",
    projectId: "statgen-993f4",
    storageBucket: "",
    messagingSenderId: "494166844594"
};

@NgModule({
  declarations: [
    MyApp,
    LeaguesPage,
    SettingsPage,
    ProfilePage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    CommonModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LeaguesPage,
    SettingsPage,
    ProfilePage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireModule,
    AngularFireDatabase
  ]
})
export class AppModule {}
