import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oops404Component } from './oops404.component';

describe('Oops404Component', () => {
  let component: Oops404Component;
  let fixture: ComponentFixture<Oops404Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Oops404Component]
    });
    fixture = TestBed.createComponent(Oops404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
