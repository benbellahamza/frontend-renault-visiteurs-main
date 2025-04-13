import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsableVisiteursComponent } from './responsable-visiteurs.component';

describe('ResponsableVisiteursComponent', () => {
  let component: ResponsableVisiteursComponent;
  let fixture: ComponentFixture<ResponsableVisiteursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResponsableVisiteursComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponsableVisiteursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
