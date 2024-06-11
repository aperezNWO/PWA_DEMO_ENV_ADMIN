import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgtablesampleComponent } from './ngtablesample.component';

describe('NgtablesampleComponent', () => {
  let component: NgtablesampleComponent;
  let fixture: ComponentFixture<NgtablesampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgtablesampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgtablesampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
