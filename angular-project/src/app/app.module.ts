import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackgroundComponent } from './background/background.component';
import { MainComponentComponent } from './background/main-component/main-component.component';
import { HeaderComponent } from './background/main-component/header/header.component';
import { ContentComponent } from './background/main-component/content/content.component';
import { FooterComponent } from './background/main-component/footer/footer.component';
import { MenuComponent } from './background/main-component/content/menu/menu.component';
import { TextComponent } from './background/main-component/content/text/text.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    MainComponentComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    MenuComponent,
    TextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }