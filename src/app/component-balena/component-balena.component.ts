import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-component-balena',
  templateUrl: './component-balena.component.html',
  styleUrls: ['./component-balena.component.css']
})
export class ComponentBalenaComponent implements OnInit {
  @Output() balenaDelete = new EventEmitter<string>();
  @Input() researchedString="";
  @Input() showTextBalena:any;
  
  constructor() { }

  ngOnInit(): void {
  }

  balena:any;

  eliminaCardBalena(){
    this.balenaDelete.emit("");
  }

}