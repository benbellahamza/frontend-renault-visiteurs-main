import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAjouterResponsableComponent } from './admin-ajouter-responsable.component';

describe('AdminAjouterResponsableComponent', () => {
  let component: AdminAjouterResponsableComponent;
  let fixture: ComponentFixture<AdminAjouterResponsableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAjouterResponsableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAjouterResponsableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
