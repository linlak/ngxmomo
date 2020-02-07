import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NGXMomoComponent } from './ngxmomo.component';

describe('NGXMomoComponent', () => {
  let component: NGXMomoComponent;
  let fixture: ComponentFixture<NGXMomoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NGXMomoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NGXMomoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
