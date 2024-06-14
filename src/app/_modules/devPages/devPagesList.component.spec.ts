import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DevPagesListsComponent    } from './devPagesList.component';

describe('DevPagesListsComponent', () => {
  let component: DevPagesListsComponent;
  let fixture: ComponentFixture<DevPagesListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DevPagesListsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DevPagesListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
