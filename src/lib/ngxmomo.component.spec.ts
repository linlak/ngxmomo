import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMomoComponent } from './ngxmomo.component';

describe('NgxMomoComponent', () => {
  let component: NgxMomoComponent;
  let fixture: ComponentFixture<NgxMomoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxMomoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMomoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
