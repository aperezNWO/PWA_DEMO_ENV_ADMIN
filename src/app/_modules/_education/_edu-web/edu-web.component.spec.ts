import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EduWebComponent } from './edu-web.component';

describe('EduWebComponent', () => {
  let component: EduWebComponent;
  let fixture: ComponentFixture<EduWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EduWebComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EduWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
