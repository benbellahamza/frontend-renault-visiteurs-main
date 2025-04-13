import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisiteursListComponent } from './visiteurs-list.component';

describe('VisiteursListComponent', () => {
  let component: VisiteursListComponent;
  let fixture: ComponentFixture<VisiteursListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisiteursListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisiteursListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
