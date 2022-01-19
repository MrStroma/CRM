import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewfattureComponent } from './newfatture.component';

describe('NewfattureComponent', () => {
  let component: NewfattureComponent;
  let fixture: ComponentFixture<NewfattureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewfattureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewfattureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
