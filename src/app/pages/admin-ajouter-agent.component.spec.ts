import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAjouterAgentComponent } from './admin-ajouter-agent.component';

describe('AdminAjouterAgentComponent', () => {
  let component: AdminAjouterAgentComponent;
  let fixture: ComponentFixture<AdminAjouterAgentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAjouterAgentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAjouterAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
