import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisiteursFormComponent } from './visiteurs-form.component';

describe('VisiteursFormComponent', () => {
  let component: VisiteursFormComponent;
  let fixture: ComponentFixture<VisiteursFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisiteursFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisiteursFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
