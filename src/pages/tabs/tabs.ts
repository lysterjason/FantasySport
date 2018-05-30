import { Component } from '@angular/core';

import { LeaguesPage } from '../leagues/leagues';
import { SettingsPage } from '../settings/settings';
import { ProfilePage } from '../profile/profile';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ProfilePage;
  tab3Root = LeaguesPage;
  tab4Root = SettingsPage;

  constructor() {

  }
}
