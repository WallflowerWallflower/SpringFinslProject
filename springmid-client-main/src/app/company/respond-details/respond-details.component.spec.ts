import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespondDetailsComponent } from './respond-details.component';

describe('RespondDetailsComponent', () => {
  let component: RespondDetailsComponent;
  let fixture: ComponentFixture<RespondDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespondDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RespondDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
