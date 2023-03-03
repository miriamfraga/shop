import { HomeComponent } from './pages/home/home.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
  
export class AppComponent {
  title = 'shop';

  displayHeader: boolean = false;

  toggleHeader(component: any) : void {
    if (component instanceof HomeComponent) {
      this.displayHeader = false; 
    } else {
      this.displayHeader = true;
    }
  }
}


