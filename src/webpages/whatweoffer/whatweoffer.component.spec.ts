import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatweofferComponent } from './whatweoffer.component';

describe('WhatweofferComponent', () => {
  let component: WhatweofferComponent;
  let fixture: ComponentFixture<WhatweofferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatweofferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatweofferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
