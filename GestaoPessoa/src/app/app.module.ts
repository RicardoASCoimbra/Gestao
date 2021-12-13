import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ListComponent } from './gestaoPessoas/list/list.component';
import { InsertComponent } from './gestaoPessoas/insert/insert.component';

//primeng
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SharedModule } from 'primeng/api';
import { SidebarModule } from 'primeng/sidebar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TabMenuModule } from 'primeng/tabmenu';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { AccordionModule } from 'primeng/accordion';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FileUploadModule } from 'primeng/fileupload';
import { TableModule } from 'primeng/table';
import { SliderModule } from 'primeng/slider';
import { MultiSelectModule } from 'primeng/multiselect';
import { AlertsService } from './@core/service/alerts.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiUrlInterceptor } from './@core/service/api-url-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    InsertComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
      //primeng
      ButtonModule,
      InputTextModule,
      SharedModule,
      SidebarModule,
      PanelMenuModule,
      SplitButtonModule,
      TabMenuModule,
      AutoCompleteModule,
      DropdownModule,
      CalendarModule,
      AccordionModule,
      RadioButtonModule,
      FileUploadModule,
      TableModule,
      SliderModule,
      MultiSelectModule
  ],
  providers: [
    AlertsService,
    { provide: HTTP_INTERCEPTORS,
      useClass: ApiUrlInterceptor,
      multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
