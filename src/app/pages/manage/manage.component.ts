import { ProductService } from './../../service/product.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent {
 productRegistrationForm!: FormGroup;
   constructor( private productBuilder:FormBuilder,
   private productService:ProductService) {}
}
