import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-component-iguana',
  templateUrl: './component-iguana.component.html',
  styleUrls: ['./component-iguana.component.css']
})
export class ComponentIguanaComponent implements OnInit {
  @Output() iguanaDelete = new EventEmitter<string>();
  @Input() researchedString="";
  showIText=false;
  constructor() { }

  ngOnInit(): void {
  }

  eliminaCardIguana(){
    this.iguanaDelete.emit("");
  }

}
