import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditprovinceComponent } from './editprovince.component';

describe('EditprovinceComponent', () => {
  let component: EditprovinceComponent;
  let fixture: ComponentFixture<EditprovinceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditprovinceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditprovinceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
