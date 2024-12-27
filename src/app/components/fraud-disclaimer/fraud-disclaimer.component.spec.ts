import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FraudDisclaimerComponent } from './fraud-disclaimer.component';

describe('FraudDisclaimerComponent', () => {
  let component: FraudDisclaimerComponent;
  let fixture: ComponentFixture<FraudDisclaimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FraudDisclaimerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FraudDisclaimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
