import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NosearchitemComponent } from './nosearchitem.component';

describe('NosearchitemComponent', () => {
  let component: NosearchitemComponent;
  let fixture: ComponentFixture<NosearchitemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [NosearchitemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NosearchitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
