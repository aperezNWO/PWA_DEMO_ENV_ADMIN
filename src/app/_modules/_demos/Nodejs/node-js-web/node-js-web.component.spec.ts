import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeJsWebComponent } from './node-js-web.component';

describe('NodeJsWebComponent', () => {
  let component: NodeJsWebComponent;
  let fixture: ComponentFixture<NodeJsWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NodeJsWebComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NodeJsWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
