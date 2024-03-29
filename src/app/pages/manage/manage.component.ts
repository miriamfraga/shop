import { Router } from '@angular/router';
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
  productRegistrationForm!: FormGroup;
  public submitted: boolean = false;
  public newProduct = this.productService.productData;
  public productId = this.productService.productData.id;

  formBuilder!: ProductRegistration;

  public music: string[]
  public subtitle: string;

  constructor(
    private productBuilder: FormBuilder,
    private productService: ProductService, router: Router) {
    this.music = ["Select one", "Blues", "Classic Rock", "Country", "Dance", "Disco", "Funk", "Grunge", "Hip-Hop", "Jazz", "Metal", "New Age", "Oldies", "Other", "Pop", "R&B", "Rap", "Reggae", "Rock", "Techno", "Industrial", "Alternative", "Ska", "Death Metal", "Pranks", "Soundtrack", "Euro-Techno", "Ambient", "Trip-Hop", "Vocal", "Jazz+Funk", "Fusion", "Trance", "Classical", "Instrumental", "Acid", "House", "Game", "Sound Clip", "Gospel", "Noise", "AlternRock", "Bass", "Soul", "Punk", "Space", "Meditative", "Instrumental Pop", "Instrumental Rock", "Ethnic", "Gothic", "Darkwave", "Techno-Industrial", "Electronic", "Pop-Folk", "Eurodance", "Dream", "Southern Rock", "Comedy", "Cult", "Gangsta", "Top 40", "Christian Rap", "Pop/Funk", "Jungle", "Native American", "Cabaret", "New Wave", "Psychadelic", "Rave", "Showtunes", "Trailer", "Lo-Fi", "Tribal", "Acid Punk", "Acid Jazz", "Polka", "Retro", "Musical", "Rock & Roll", "Hard Rock", "Folk", "Folk-Rock", "National Folk", "Swing", "Fast Fusion", "Bebob", "Latin", "Revival", "Celtic", "Bluegrass", "Avantgarde", "Gothic Rock", "Progressive Rock", "Psychedelic Rock", "Symphonic Rock", "Slow Rock", "Big Band", "Chorus", "Easy Listening", "Acoustic", "Humour", "Speech", "Chanson", "Opera", "Chamber Music", "Sonata", "Symphony", "Booty Bass", "Primus", "Porn Groove", "Satire", "Slow Jam", "Club", "Tango", "Samba", "Folklore", "Ballad", "Power Ballad", "Rhythmic Soul", "Freestyle", "Duet", "Punk Rock", "Drum Solo", "Acapella", "Euro-House", "Dance Hall"];
    this.subtitle = "Please make sure to fill all the required fields before uploading your bonsai.";
  }

 
  ngOnInit(): void {
    this.productRegistrationForm = this.productBuilder.group({
      name: [this.newProduct.name, [Validators.required]],
      price: [this.newProduct.price, [Validators.required]],
      care: [this.newProduct.care, [Validators.required]],
      music: [this.newProduct.music, [Validators.required]],
      description: [this.newProduct.description, [Validators.required, Validators.maxLength(100)]],
      image: [this.newProduct.image, [Validators.required]],
    });
    this.productRegistrationForm.valueChanges.subscribe((changes) => {
      this.newProduct = changes;
    })
  }

  public onSubmit(): void {
    this.submitted = true;

    if (this.productRegistrationForm.valid) { }
    const newProduct: ProductRegistration = {
      id: this.productRegistrationForm.get('id')?.value,
      name: this.productRegistrationForm.get('name')?.value,
      price: this.productRegistrationForm.get('price')?.value,
      care: this.productRegistrationForm.get('care')?.value,
      music: this.productRegistrationForm.get('music')?.value,
      description: this.productRegistrationForm.get('description')?.value,
      image: this.productRegistrationForm.get('image')?.value,
    }
    this.productService.postBonsai(this.newProduct).subscribe((data: any) => {
      console.log(this.newProduct);
    })

    this.productRegistrationForm.reset();
   this.submitted = false;
  
  }
  
    
}

