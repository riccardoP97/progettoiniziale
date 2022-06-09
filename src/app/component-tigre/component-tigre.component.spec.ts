import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentTigreComponent } from './component-tigre.component';

describe('ComponentTigreComponent', () => {
  let component: ComponentTigreComponent;
  let fixture: ComponentFixture<ComponentTigreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentTigreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentTigreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
