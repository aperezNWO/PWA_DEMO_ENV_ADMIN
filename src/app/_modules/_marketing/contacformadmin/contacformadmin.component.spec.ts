import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContacFormAdminComponent } from './contacformadmin.component';


describe('ContacFormAdminComponent', () => {
  let component: ContacFormAdminComponent;
  let fixture: ComponentFixture<ContacFormAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContacFormAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContacFormAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
