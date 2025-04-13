import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListeResponsablesComponent } from './admin-liste-responsables.component';

describe('AdminListeResponsablesComponent', () => {
  let component: AdminListeResponsablesComponent;
  let fixture: ComponentFixture<AdminListeResponsablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminListeResponsablesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminListeResponsablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
