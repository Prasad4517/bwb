import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { orderspage } from './orders.page';

describe('Tab3Page', () => {
  let component: orderspage;
  let fixture: ComponentFixture<orderspage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [orderspage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(orderspage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
