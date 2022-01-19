import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcomuniComponent } from './newcomuni.component';

describe('NewcomuniComponent', () => {
  let component: NewcomuniComponent;
  let fixture: ComponentFixture<NewcomuniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewcomuniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcomuniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
