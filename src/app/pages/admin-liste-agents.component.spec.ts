import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListeAgentsComponent } from './admin-liste-agents.component';

describe('AdminListeAgentsComponent', () => {
  let component: AdminListeAgentsComponent;
  let fixture: ComponentFixture<AdminListeAgentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminListeAgentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminListeAgentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
