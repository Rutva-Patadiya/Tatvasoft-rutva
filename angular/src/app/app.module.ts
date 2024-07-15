import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DatePipe } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { EditorModule } from '@progress/kendo-angular-editor';
import { ListBoxModule } from '@progress/kendo-angular-listbox';
import { ToolBarModule } from '@progress/kendo-angular-toolbar';
import { NgToastModule } from 'ng-angular-popup';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgxEditorModule } from 'ngx-editor';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { ToastrModule } from 'ngx-toastr';
import { UiSwitchModule } from 'ngx-toggle-switch';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentNameComponent } from './component-name/component-name.component';
import { TokenInterceptor } from './Interceptors/token.interceptor';
import { ForgotPasswordComponent } from './LoginRegister/forgot-password/forgot-password.component';
import { LoginComponent } from './LoginRegister/login/login.component';
import { RegisterComponent } from './LoginRegister/register/register.component';
import { ResetPasswordComponent } from './LoginRegister/reset-password/reset-password.component';
import { FooterComponent } from './NavBar/footer/footer.component';
import { HomeComponent } from './NavBar/home/home.component';
import { NavbarComponent } from './NavBar/navbar/navbar.component';
import { SearchinSortingComponent } from './NavBar/searchin-sorting/searchin-sorting.component';
import { NewMissionComponent } from './new-mission/new-mission.component';
import { SearchPipe } from './Pipe/search.pipe';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { UsereditprofileComponent } from './usereditprofile/usereditprofile.component';
import { VolunVolunteeringMissionComponent } from './volun-volunteering-mission/volun-volunteering-mission.component';
import { VolunteeringTimesheetComponent } from './volunteering-timesheet/volunteering-timesheet.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    NavbarComponent,
    SearchinSortingComponent,
    HomeComponent,
    FooterComponent,
    NewMissionComponent,
    VolunVolunteeringMissionComponent,
    UsereditprofileComponent,
    PrivacyPolicyComponent,
    VolunteeringTimesheetComponent,
    SearchPipe,
    ComponentNameComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxGalleryModule,
    TabsModule.forRoot(),
    BsDatepickerModule.forRoot(),
    NgxEditorModule,
    ListBoxModule,
    ButtonsModule,
    EditorModule,
    ToolBarModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    NgbModule,
    NgToastModule,
    NgxPaginationModule,
    NgxStarRatingModule,
    UiSwitchModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptor,
    multi:true
},DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
