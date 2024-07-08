import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeJsConfigComponent } from './node-js-config.component';

describe('NodeJsConfigComponent', () => {
  let component: NodeJsConfigComponent;
  let fixture: ComponentFixture<NodeJsConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NodeJsConfigComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NodeJsConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
