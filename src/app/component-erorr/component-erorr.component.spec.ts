import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentErorrComponent } from './component-erorr.component';

describe('ComponentErorrComponent', () => {
  let component: ComponentErorrComponent;
  let fixture: ComponentFixture<ComponentErorrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentErorrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentErorrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
