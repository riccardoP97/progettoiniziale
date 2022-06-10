import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-component-erorr',
  templateUrl: './component-erorr.component.html',
  styleUrls: ['./component-erorr.component.css']
})
export class ComponentErorrComponent implements OnInit {
  @Input() researchedString="";
  @Output() errorDelete = new EventEmitter<string>();

  errorMessage:string="Errore! Non ho trovato nessun animale con il nome "+this.researchedString;

  constructor() { }

  ngOnInit(): void {
  }

  eliminaCardError(){
    this.errorDelete.emit("");
  }
}
