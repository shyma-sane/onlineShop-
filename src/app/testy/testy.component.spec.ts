import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestyComponent } from './testy.component';

describe('TestyComponent', () => {
  let component: TestyComponent;
  let fixture: ComponentFixture<TestyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
