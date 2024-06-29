import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhpWebComponent } from './php-web.component';

describe('PhpWebComponent', () => {
  let component: PhpWebComponent;
  let fixture: ComponentFixture<PhpWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhpWebComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhpWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
