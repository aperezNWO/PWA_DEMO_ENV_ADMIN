import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetcoreWebComponent } from './netcore-web.component';

describe('NetcoreWebComponent', () => {
  let component: NetcoreWebComponent;
  let fixture: ComponentFixture<NetcoreWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NetcoreWebComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NetcoreWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
