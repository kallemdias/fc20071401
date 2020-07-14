import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { Fc20071401SharedModule } from 'app/shared/shared.module';
import { Fc20071401CoreModule } from 'app/core/core.module';
import { Fc20071401AppRoutingModule } from './app-routing.module';
import { Fc20071401HomeModule } from './home/home.module';
import { Fc20071401EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    Fc20071401SharedModule,
    Fc20071401CoreModule,
    Fc20071401HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    Fc20071401EntityModule,
    Fc20071401AppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent],
})
export class Fc20071401AppModule {}
