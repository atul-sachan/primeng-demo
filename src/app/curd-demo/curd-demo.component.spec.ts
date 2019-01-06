import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurdDemoComponent } from './curd-demo.component';

describe('CurdDemoComponent', () => {
  let component: CurdDemoComponent;
  let fixture: ComponentFixture<CurdDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurdDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurdDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
