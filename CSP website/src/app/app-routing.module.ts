import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { ProtocolsComponent } from './protocols/protocols.component';
import { ModernmethodsComponent } from './modernmethods/modernmethods.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { AppComponent } from './app.component';
import { ProblemsComponent } from './problems/problems.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'introduction', component: IntroductionComponent},
  {path: 'protocols', component: ProtocolsComponent},
  {path: 'problems', component: ProblemsComponent},
  {path: 'modernmethods', component: ModernmethodsComponent},
  {path: 'benefits', component: BenefitsComponent},
  {path: 'aboutus', component: AboutusComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
