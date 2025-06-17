import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { homepage } from './home.page';

describe('Tab2Page', () => {
  let component: homepage;
  let fixture: ComponentFixture<homepage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [homepage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(homepage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
