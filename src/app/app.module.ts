import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NavComponent } from './components/nav/nav.component';
import {NgOptimizedImage} from "@angular/common";
import { TitleComponent } from './components/title/title.component';
import { CircleComponent } from './components/circle/circle.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { TextBoxComponent } from './components/text-box/text-box.component';
import { SwithLanguageComponent } from './components/swith-language/swith-language.component';
import { ClearExtensionPipe } from './pipes/clear-extension.pipe';
import { TechSectionComponent } from './components/tech-section/tech-section.component';
import { TechCardComponent } from './components/tech-card/tech-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    NavComponent,
    TitleComponent,
    CircleComponent,
    AboutMeComponent,
    TextBoxComponent,
    SwithLanguageComponent,
    ClearExtensionPipe,
    TechSectionComponent,
    TechCardComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgOptimizedImage
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
