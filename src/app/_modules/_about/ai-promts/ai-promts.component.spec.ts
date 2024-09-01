import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiPromtsComponent } from './ai-promts.component';

describe('AiPromtsComponent', () => {
  let component: AiPromtsComponent;
  let fixture: ComponentFixture<AiPromtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AiPromtsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AiPromtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
