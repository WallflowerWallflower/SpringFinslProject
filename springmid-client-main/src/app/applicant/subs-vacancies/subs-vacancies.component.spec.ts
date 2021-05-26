import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsVacanciesComponent } from './subs-vacancies.component';

describe('SubsVacanciesComponent', () => {
  let component: SubsVacanciesComponent;
  let fixture: ComponentFixture<SubsVacanciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubsVacanciesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubsVacanciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
