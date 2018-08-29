import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickNotifierComponent } from './click-notifier.component';

describe('ClickNotifierComponent', () => {
  let component: ClickNotifierComponent;
  let fixture: ComponentFixture<ClickNotifierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickNotifierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickNotifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
