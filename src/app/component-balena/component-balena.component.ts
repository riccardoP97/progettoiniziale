import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-component-balena',
  templateUrl: './component-balena.component.html',
  styleUrls: ['./component-balena.component.css']
})
export class ComponentBalenaComponent implements OnInit {

  @Output() balenaElimination = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  balena:any;

  eliminaCardBalena(){
    this.balenaElimination.emit();
  }

}