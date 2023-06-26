import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightSidebarngComponent } from './right-sidebarng.component';

describe('RightSidebarngComponent', () => {
  let component: RightSidebarngComponent;
  let fixture: ComponentFixture<RightSidebarngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightSidebarngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightSidebarngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
