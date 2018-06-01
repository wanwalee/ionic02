import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

    // OneSignal Code start:
    // Enable to debug issues:
    // window["plugins"].OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});

    var notificationOpenedCallback = function(jsonData) {
      alert('notificationOpenedCallback: ' + JSON.stringify(jsonData));
    };

    window["plugins"].OneSignal
      .startInit("034f895e-540f-4543-b740-1c3bbced6d09", "730990206691")
      .handleNotificationOpened(notificationOpenedCallback)
      .endInit();
    });
  }
}
