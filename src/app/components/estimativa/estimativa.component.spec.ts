import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimativaComponent } from './estimativa.component';

describe('EstimativaComponent', () => {
  let component: EstimativaComponent;
  let fixture: ComponentFixture<EstimativaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstimativaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimativaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
