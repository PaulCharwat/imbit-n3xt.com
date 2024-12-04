import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuslandComponent } from './ausland.component';

describe('AuslandComponent', () => {
  let component: AuslandComponent;
  let fixture: ComponentFixture<AuslandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuslandComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuslandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
