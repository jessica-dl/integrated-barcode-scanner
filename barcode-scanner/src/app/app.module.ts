import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BarcodeScannerComponent } from './barcode-scanner/barcode-scanner.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    BarcodeScannerComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
