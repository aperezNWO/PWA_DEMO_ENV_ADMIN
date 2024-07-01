import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CppWebComponent } from './cpp-web.component';

describe('CppWebComponent', () => {
  let component: CppWebComponent;
  let fixture: ComponentFixture<CppWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CppWebComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CppWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
