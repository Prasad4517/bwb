import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfileComponent } from './profile.component';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), ProfileComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should preserve the profile when editing is cancelled', () => {
    const originalName = component.profile().name;

    component.startEditing();
    component.profileForm.controls.name.setValue('Changed Name');
    component.cancelEditing();

    expect(component.profileForm.controls.name.value).toBe(originalName);
    expect(component.editMode()).toBeFalse();
  });
});
