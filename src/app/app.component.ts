import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav, App } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { TicketsPage } from '../pages/tickets/tickets';
import { StorePage } from '../pages/store/store';
import { ActivitiesPage } from '../pages/activities/activities';
import { SpeakersPage } from '../pages/speakers/speakers';
import { ProgrammesPage } from '../pages/programmes/programmes';
import { LuckyPage } from '../pages/lucky/lucky';
import { ExhibitorsPage } from '../pages/exhibitors/exhibitors';
import { FloorplanPage } from '../pages/floorplan/floorplan';

import { TabsNavigationPage } from '../pages/tabs-navigation/tabs-navigation';
import { FormsPage } from '../pages/forms/forms';
import { LayoutsPage } from '../pages/layouts/layouts';
import { WalkthroughPage } from '../pages/walkthrough/walkthrough';
import { SettingsPage } from '../pages/settings/settings';
import { FunctionalitiesPage } from '../pages/functionalities/functionalities';

import { GridPage } from '../pages/grid/grid';

@Component({
  selector: 'app-root',
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;

  // make WalkthroughPage the root (or first) page
     rootPage: any = WalkthroughPage;
    //  rootPage: any = TabsNavigationPage;


  pages: Array<{title: string, icon: string, component: any}>;
  pushPages: Array<{title: string, icon: string, component: any}>;

  constructor(
    platform: Platform,
    public menu: MenuController,
    public app: App,
    public splashScreen: SplashScreen,
    public statusBar: StatusBar
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.splashScreen.hide();
      this.statusBar.styleDefault();
    });

    this.pages = [
      { title: 'Home', icon: 'home', component: TabsNavigationPage },

      { title: 'Tickets', icon: 'md-film', component: TicketsPage },
      { title: 'Store', icon: 'md-cart', component: StorePage },
      { title: 'Activities', icon: 'md-walk', component: ActivitiesPage },
      { title: 'Speakers', icon: 'md-microphone', component: SpeakersPage },
      { title: 'Programmes', icon: 'md-easel', component: ProgrammesPage },
      { title: 'Lucky', icon: 'md-cube', component: LuckyPage },
      { title: 'Exhibitors', icon: 'md-people', component: ExhibitorsPage },
      { title: 'Floorplan', icon: 'md-map', component: FloorplanPage },

      { title: 'Grid', icon: 'md-map', component: GridPage },

      { title: 'Forms', icon: 'create', component: FormsPage },
      { title: 'Functionalities', icon: 'code', component: FunctionalitiesPage }

    ];

    this.pushPages = [
      { title: 'Layouts', icon: 'grid', component: LayoutsPage },
      { title: 'Settings', icon: 'settings', component: SettingsPage }
    ];
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }

  pushPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // rootNav is now deprecated (since beta 11) (https://forum.ionicframework.com/t/cant-access-rootnav-after-upgrade-to-beta-11/59889)
    this.app.getRootNav().push(page.component);
  }
}
