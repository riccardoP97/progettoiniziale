import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-component-tigre',
  templateUrl: './component-tigre.component.html',
  styleUrls: ['./component-tigre.component.css']
})
export class ComponentTigreComponent implements OnInit {
  
  @Output() tigreDelete = new EventEmitter<string>();
  @Input() researchedString="";
  showTText=false;
  constructor() { }

  ngOnInit(): void {
  }

  eliminaCardTigre() {
    this.tigreDelete.emit("");
  }


}
