import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Inject } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { GalleryComponent } from './nav-bar/gallery/gallery.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CarousalComponent } from './carousal/carousal.component';
import { ServicesTabComponent } from './services-tab/services-tab.component';
import { ContactComponent } from './contact/contact.component';
import { MainContactComponent } from './nav-bar/contact/contact.component';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { ChoiceComponent } from './services-tab/choice/choice.component';
import { MatRippleModule } from '@angular/material/core';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { DthComponent } from './services-tab/dth/dth.component';
import { ViewComponent } from './view/view.component';
import { DthProviderComponent } from './dth-provider/dth-provider.component';
import { HttpClientModule } from '@angular/common/http';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    GalleryComponent,
    CarousalComponent,
    ServicesTabComponent,
    ContactComponent,
    ChoiceComponent,
    MainContactComponent,
    DthComponent,
    ViewComponent,
    DthProviderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatBottomSheetModule,
    MatGridListModule,
    MatFormFieldModule,
    MatListModule,
    MatDialogModule,
    MatCardModule,
    MatRippleModule,
    ClipboardModule,
    HttpClientModule,
    MatExpansionModule,
    MatSelectModule,
    MatSortModule,
    AngularFireModule.initializeApp(environment.firebase),
    // AngularFireAnalyticsModule,
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
