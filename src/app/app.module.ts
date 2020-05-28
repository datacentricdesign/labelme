//angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

//Boostrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//components
import { AppComponent } from './app.component';
import { LabelPictureComponent } from './components/label-picture/label-picture.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PropertyComponent } from './components/property/property.component';

//ngx - gallery
import { GalleryModule } from '@ngx-gallery/core';
import { LabelsComponent } from './components/labels/labels.component';

//angular-material
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';

//Dialogs
import { ThingsComponent } from './components/things/things.component';
import { DialogJWTComponent } from './components/dialogs/dialog-jwt/dialog-jwt.component';
import { DialogAddThingComponent } from './components/dialogs/dialog-add-thing/dialog-add-thing.component';
import { DialogAddPemComponent } from './components/dialogs/dialog-add-pem/dialog-add-pem.component';
import { DialogAddPropertyComponent } from './components/dialogs/dialog-add-property/dialog-add-property.component';

//ngx-clipboard
import { ClipboardModule } from 'ngx-clipboard';

//prime-ng
import { SliderModule } from 'primeng/slider';
import { DialogModule } from 'primeng/dialog';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { GalleriaModule } from 'primeng/galleria';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    LabelPictureComponent,
    LabelsComponent,
    ThingsComponent,
    DialogJWTComponent,
    DialogAddThingComponent,
    DialogAddPemComponent,
    DialogAddPropertyComponent,
    PropertyComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: '**', redirectTo: '404' },
    ]),
    NgbModule,
    CommonModule,
    GalleryModule,
    ClipboardModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSelectModule,
    SliderModule,
    DialogModule,
    CalendarModule,
    CheckboxModule,
    InputTextModule,
    GalleriaModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
