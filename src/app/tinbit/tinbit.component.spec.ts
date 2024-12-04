import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TinbitComponent } from './tinbit.component';

describe('TinbitComponent', () => {
  let component: TinbitComponent;
  let fixture: ComponentFixture<TinbitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TinbitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TinbitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
