import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiereHomeComponent } from './premiere-home.component';

describe('PremiereHomeComponent', () => {
  let component: PremiereHomeComponent;
  let fixture: ComponentFixture<PremiereHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PremiereHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PremiereHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
