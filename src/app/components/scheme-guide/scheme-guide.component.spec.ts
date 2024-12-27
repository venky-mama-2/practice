import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemeGuideComponent } from './scheme-guide.component';

describe('SchemeGuideComponent', () => {
  let component: SchemeGuideComponent;
  let fixture: ComponentFixture<SchemeGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchemeGuideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchemeGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
