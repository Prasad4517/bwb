import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BargainComponent } from './bargain.component';

describe('BargainComponent', () => {
  let component: BargainComponent;
  let fixture: ComponentFixture<BargainComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [BargainComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BargainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
