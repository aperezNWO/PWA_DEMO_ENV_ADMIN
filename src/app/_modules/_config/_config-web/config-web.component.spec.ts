import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigWebComponent } from './config-web.component';

describe('ConfigWebComponent', () => {
  let component: ConfigWebComponent;
  let fixture: ComponentFixture<ConfigWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfigWebComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfigWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
