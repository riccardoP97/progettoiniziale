import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentIguanaComponent } from './component-iguana.component';

describe('ComponentIguanaComponent', () => {
  let component: ComponentIguanaComponent;
  let fixture: ComponentFixture<ComponentIguanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentIguanaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentIguanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
