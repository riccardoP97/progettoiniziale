import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Animali';
  
  balena:any;

  eliminaCard(animal:string){
    this.balena="app-component-balena";
    if(animal==this.balena){
      this.balena.style.display="none";
    }
  }
}
