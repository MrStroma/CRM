import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditfattureComponent } from './editfatture.component';

describe('EditfattureComponent', () => {
  let component: EditfattureComponent;
  let fixture: ComponentFixture<EditfattureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditfattureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditfattureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
