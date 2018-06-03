import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { TabsPage } from '../pages/tabs/tabs';

import { JantaPageModule } from '../pages/janta/janta.module';
import { CafePageModule } from '../pages/cafe/cafe.module';
import { AlmocoPageModule } from '../pages/almoco/almoco.module';
import { StatusPageModule } from '../pages/status/status.module';
import { CompraPageModule } from '../pages/compra/compra.module';
import { ExtratoPageModule } from '../pages/extrato/extrato.module';
import { StartPageModule } from '../pages/start/start.module';
import { LoginPageModule } from '../pages/login/login.module';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginProvider } from '../providers/login/login';
import { ExtratoPProvider } from '../providers/extrato-p/extrato-p';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    JantaPageModule,
    CafePageModule,
    AlmocoPageModule,
    StatusPageModule,
    CompraPageModule,
    ExtratoPageModule,
    StartPageModule,
    LoginPageModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    LoginProvider,
    ExtratoPProvider
  ]
})
export class AppModule { }
