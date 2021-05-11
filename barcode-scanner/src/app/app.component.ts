import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  barcodeValue;

  onBarcodeScanned(result) {
    this.barcodeValue = result.target.value;
  }
}
