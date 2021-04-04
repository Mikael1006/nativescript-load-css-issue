import { Component } from '@angular/core'

@Component({
  selector: 'ns-details',
  templateUrl: './item-detail.component.html',
  // Loading the css seems to be the issue, comment next line and the app will not freeze
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent {}
