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
  public productRegistrationForm: FormGroup;
  public submitted: boolean = false;
  FormBuilder: any;

  category = ["Select one", "Plants", "Coffee", "Gardening", "Coffee making"];
  music = ["Select one", "Blues", "Classic Rock", "Country", "Dance", "Disco", "Funk", "Grunge",
    "Hip-Hop", "Jazz", "Metal", "New Age", "Oldies", "Other", "Pop", "R&B",
    "Rap", "Reggae", "Rock", "Techno", "Industrial", "Alternative", "Ska",
    "Death Metal", "Pranks", "Soundtrack", "Euro-Techno", "Ambient",
    "Trip-Hop", "Vocal", "Jazz+Funk", "Fusion", "Trance", "Classical",
    "Instrumental", "Acid", "House", "Game", "Sound Clip", "Gospel",
    "Noise", "AlternRock", "Bass", "Soul", "Punk", "Space", "Meditative",
    "Instrumental Pop", "Instrumental Rock", "Ethnic", "Gothic",
    "Darkwave", "Techno-Industrial", "Electronic", "Pop-Folk",
    "Eurodance", "Dream", "Southern Rock", "Comedy", "Cult", "Gangsta",
    "Top 40", "Christian Rap", "Pop/Funk", "Jungle", "Native American",
    "Cabaret", "New Wave", "Psychadelic", "Rave", "Showtunes", "Trailer",
    "Lo-Fi", "Tribal", "Acid Punk", "Acid Jazz", "Polka", "Retro",
    "Musical", "Rock & Roll", "Hard Rock", "Folk", "Folk-Rock",
    "National Folk", "Swing", "Fast Fusion", "Bebob", "Latin", "Revival",
    "Celtic", "Bluegrass", "Avantgarde", "Gothic Rock", "Progressive Rock",
    "Psychedelic Rock", "Symphonic Rock", "Slow Rock", "Big Band",
    "Chorus", "Easy Listening", "Acoustic", "Humour", "Speech", "Chanson",
    "Opera", "Chamber Music", "Sonata", "Symphony", "Booty Bass", "Primus",
    "Porn Groove", "Satire", "Slow Jam", "Club", "Tango", "Samba",
    "Folklore", "Ballad", "Power Ballad", "Rhythmic Soul", "Freestyle",
    "Duet", "Punk Rock", "Drum Solo", "Acapella", "Euro-House", "Dance Hall"];


  constructor(private productBuilder: FormBuilder, private productService: ProductService) {
     
    this.productRegistrationForm = this.FormBuilder.group({
      nameForm: ['', [Validators.required]],
      priceForm: [0, [Validators.required]],
      categoryForm: ['Select one', [Validators.required]],
      careForm: ['', [Validators.required]],
      musicForm: ['Select one', [Validators.required]],
      descriptionForm: ['', [Validators.required, Validators.maxLength(100)]],
      imageForm: ['', [Validators.required]],
      ratingForm: [0, [Validators.required, Validators.max(5)]]
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
        rating: this.productRegistrationForm.get('rating')?.value,
      }
    }
  }
}
