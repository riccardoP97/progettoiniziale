import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentBalenaComponent } from './component-balena.component';

describe('ComponentBalenaComponent', () => {
  let component: ComponentBalenaComponent;
  let fixture: ComponentFixture<ComponentBalenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentBalenaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentBalenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
