import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detail-bonsai',
  templateUrl: './detail-bonsai.component.html',
  styleUrls: ['./detail-bonsai.component.scss']
})
export class DetailBonsaiComponent {
@Input() product!: any;
}
