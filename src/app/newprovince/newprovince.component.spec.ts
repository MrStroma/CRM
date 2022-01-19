import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewprovinceComponent } from './newprovince.component';

describe('NewprovinceComponent', () => {
  let component: NewprovinceComponent;
  let fixture: ComponentFixture<NewprovinceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewprovinceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewprovinceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
