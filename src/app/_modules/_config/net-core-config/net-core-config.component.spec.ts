import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetCoreConfigComponent } from './net-core-config.component';

describe('NetCoreConfigComponent', () => {
  let component: NetCoreConfigComponent;
  let fixture: ComponentFixture<NetCoreConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NetCoreConfigComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NetCoreConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
