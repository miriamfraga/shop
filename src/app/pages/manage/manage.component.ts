import { ProductRegistration } from './../../models/productRegistration';
import { ProductService } from './../../service/product.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})


export class ManageComponent {
  public productRegistrationForm!: FormGroup;
  public submitted: boolean = false;
  FormBuilder: any;


  constructor(private productBuilder: FormBuilder,
    private productService: ProductService) {
     
    this.productRegistrationForm = this.FormBuilder.group({
      name: ['', [Validators.required]],
      price: ['', [Validators.required]],
      category: ['', [Validators.required]],
      care: ['', [Validators.required]],
      music: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.maxLength(100)]],
      image: ['', [Validators.required]],
      rating: ['', [Validators.required, Validators.max(5)]]
    })
  }

  onSubmit() {
    this.submitted = true;

    if (this.productRegistrationForm.valid) {
      const newProduct: ProductRegistration = {
        name: this.productRegistrationForm.get('name')?.value,
        price: this.productRegistrationForm.get('price')?.value,
        category: this.productRegistrationForm.get('category')?.value,
        care: this.productRegistrationForm.get('care')?.value,
        music: this.productRegistrationForm.get('music')?.value,
        description: this.productRegistrationForm.get('description')?.value,
        image: this.productRegistrationForm.get('image')?.value,
        rating: this.productRegistrationForm.get('reviews')?.value,
      }
    }
  }
}
