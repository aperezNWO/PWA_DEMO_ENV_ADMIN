import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringBootWebComponent } from './spring-boot-web.component';

describe('SpringBootWebComponent', () => {
  let component: SpringBootWebComponent;
  let fixture: ComponentFixture<SpringBootWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpringBootWebComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpringBootWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
