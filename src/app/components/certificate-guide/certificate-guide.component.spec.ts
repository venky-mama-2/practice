import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateGuideComponent } from './certificate-guide.component';

describe('CertificateGuideComponent', () => {
  let component: CertificateGuideComponent;
  let fixture: ComponentFixture<CertificateGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertificateGuideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificateGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
