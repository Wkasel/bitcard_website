import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedeemWizardComponent } from './redeem-wizard.component';

describe('RedeemWizardComponent', () => {
  let component: RedeemWizardComponent;
  let fixture: ComponentFixture<RedeemWizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedeemWizardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedeemWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
