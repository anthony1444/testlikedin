import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsefulllinksComponent } from './usefulllinks.component';

describe('UsefulllinksComponent', () => {
  let component: UsefulllinksComponent;
  let fixture: ComponentFixture<UsefulllinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsefulllinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsefulllinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
