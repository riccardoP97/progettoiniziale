import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentGiaguaroComponent } from './component-giaguaro.component';

describe('ComponentGiaguaroComponent', () => {
  let component: ComponentGiaguaroComponent;
  let fixture: ComponentFixture<ComponentGiaguaroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentGiaguaroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentGiaguaroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
