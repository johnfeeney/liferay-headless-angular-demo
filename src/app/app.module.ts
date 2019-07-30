import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {HomeComponent} from './pages/home/home.component';
import {DetailsComponent} from './pages/details/details.component';
import {WeatherService} from './services/weather/weather.service';
import {LiferayService} from './services/liferay/liferay.service';
import {HttpClientModule} from '@angular/common/http';
import {WeatherCardComponent} from './ui/weather-card/weather-card.component';
import {AddCardComponent} from './ui/add-card/add-card.component';
import {RawDataCardComponent} from './ui/raw-data-card/raw-data-card.component';
import {RenderedDataCardComponent} from './ui/rendered-data-card/rendered-data-card.component';
import {LocalisedDataCardComponent} from './ui/localised-data-card/localised-data-card.component';
import {AddComponent} from './pages/add/add.component';
import {RawDataComponent} from './pages/raw-data/raw-data.component';
import {RenderedDataComponent} from './pages/rendered-data/rendered-data.component';
import {LocalisedDataComponent} from './pages/localised-data/localised-data.component';
import {LoginComponent} from './pages/login/login.component';
import {SignupComponent} from './pages/signup/signup.component';
import {UiService} from './services/ui/ui.service';
import {SanitizeHtmlPipe} from './pages/add/add.sanitize-html.pipe';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    WeatherCardComponent,
    AddCardComponent,
	RawDataCardComponent,
	RenderedDataCardComponent,
	LocalisedDataCardComponent,
    AddComponent,
	RawDataComponent,
	RenderedDataComponent,
	LocalisedDataComponent,	
    LoginComponent,
    SignupComponent,
    AddCardComponent,
	SanitizeHtmlPipe
  ],
  exports: [ SanitizeHtmlPipe ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
	FontAwesomeModule
  ],
  providers: [
    WeatherService,
	LiferayService,
    UiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
