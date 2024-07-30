import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechInfoComponent } from './tech-info.component';

describe('TechInfoComponent', () => {
  let component: TechInfoComponent;
  let fixture: ComponentFixture<TechInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TechInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
