import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringBootConfigComponent } from './spring-boot-config.component';

describe('SpringBootConfigComponent', () => {
  let component: SpringBootConfigComponent;
  let fixture: ComponentFixture<SpringBootConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpringBootConfigComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpringBootConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
