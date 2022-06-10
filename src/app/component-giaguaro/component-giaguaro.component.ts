import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-component-giaguaro',
  templateUrl: './component-giaguaro.component.html',
  styleUrls: ['./component-giaguaro.component.css']
})
export class ComponentGiaguaroComponent implements OnInit {
  @Output() giaguaroDelete = new EventEmitter<string>();
  @Input() researchedString="";
  
  showGText=false;

  constructor() { }

  ngOnInit(): void {
  }

  eliminaCardGiaguaro(){
    this.giaguaroDelete.emit("");
  }

}
