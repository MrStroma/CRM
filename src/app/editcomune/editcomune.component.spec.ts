import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcomuneComponent } from './editcomune.component';

describe('EditcomuneComponent', () => {
  let component: EditcomuneComponent;
  let fixture: ComponentFixture<EditcomuneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditcomuneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcomuneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
