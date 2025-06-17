import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { storepage } from './store.page';

describe('Tab1Page', () => {
  let component: storepage;
  let fixture: ComponentFixture<storepage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [storepage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(storepage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
