import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElencofattureComponent } from './elencofatture.component';

describe('ElencofattureComponent', () => {
  let component: ElencofattureComponent;
  let fixture: ComponentFixture<ElencofattureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElencofattureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElencofattureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
