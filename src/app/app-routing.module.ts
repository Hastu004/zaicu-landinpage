import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SassLandingOneComponent } from './components/pages/sass-landing-one/sass-landing-one.component';
import { AppLandingComponent } from './components/pages/app-landing/app-landing.component';
import { SassLandingTwoComponent } from './components/pages/sass-landing-two/sass-landing-two.component';
import { AgencyLandingOneComponent } from './components/pages/agency-landing-one/agency-landing-one.component';
import { AgencyLandingTwoComponent } from './components/pages/agency-landing-two/agency-landing-two.component';
import { PortfolioLandingComponent } from './components/pages/portfolio-landing/portfolio-landing.component';

const routes: Routes = [
    {path: '', component: SassLandingOneComponent},
    {path: 'sass-landing-two', component: SassLandingTwoComponent},
    {path: 'app-landing', component: AppLandingComponent},
    {path: 'agency-landing-one', component: AgencyLandingOneComponent},
    {path: 'agency-landing-two', component: AgencyLandingTwoComponent},
    {path: 'portfolio-landing', component: PortfolioLandingComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {})],
    exports: [RouterModule]
})
export class AppRoutingModule { }