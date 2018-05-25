import { PortfolioePageComponent } from './components/portfolio/portfolio-page.component';
import { LendingPageContentComponent } from './components/lending-page-content/lending-page.component';
import { HeaderPageComponent } from './components/header/header-page.component';
import { LendingPageComponent } from './components/lending-page/lending-page.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReferencePageComponent } from './components/reference/references-page.component';

import {Router, Routes, RouterModule} from "@angular/router";
import { PopupPageComponent } from './components/popup/popup-page.component';

const appRoutes: Routes = [
  { path: '', component: LendingPageContentComponent},
  { path: 'reference', component: ReferencePageComponent},
  { path: 'portfolio', component: PortfolioePageComponent},
  { path: 'popup', component: PopupPageComponent},
  { path: '**', redirectTo: '' }
];

// export const routing = RouterModule.forRoot(appRoutes);


@NgModule({
  declarations: [
    AppComponent, 
    LendingPageComponent, 
    HeaderPageComponent, 
    LendingPageContentComponent,
    ReferencePageComponent, 
    PortfolioePageComponent,
    PopupPageComponent

  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
