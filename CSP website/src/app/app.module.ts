import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { ProtocolsComponent } from './protocols/protocols.component';
import { ModernmethodsComponent } from './modernmethods/modernmethods.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { ProblemsComponent } from './problems/problems.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IntroductionComponent,
    ProtocolsComponent,
    ModernmethodsComponent,
    AboutusComponent,
    BenefitsComponent,
    ProblemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
