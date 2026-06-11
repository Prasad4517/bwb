import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AlertController, IonicModule, NavController, ToastController } from '@ionic/angular';
import { EditableUserProfile } from '../../../../core/models/user-profile.model';
import { ProfileService } from '../../../../core/services/profile.service';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  standalone: true,
  imports: [IonicModule, ReactiveFormsModule],
})
export class ProfileComponent implements OnInit {
  readonly editMode = signal(false);
  readonly saving = signal(false);
  readonly profile = this.profileService.profile;
  readonly profileForm = this.formBuilder.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(80)]],
    email: ['', [Validators.required, Validators.email]],
    mobile: ['', [Validators.required, Validators.pattern(/^\+?[0-9][0-9 -]{7,18}$/)]],
    address: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(240)]],
  });

  constructor(
    private readonly alertController: AlertController,
    private readonly formBuilder: FormBuilder,
    private readonly navController: NavController,
    private readonly profileService: ProfileService,
    private readonly toastController: ToastController,
  ) {}

  ngOnInit(): void {
    void this.initializeProfile();
  }

  goBack(): void {
    this.navController.back();
  }

  startEditing(): void {
    this.resetForm();
    this.editMode.set(true);
  }

  cancelEditing(): void {
    this.resetForm();
    this.editMode.set(false);
  }

  async saveProfile(): Promise<void> {
    if (this.profileForm.invalid) {
      this.profileForm.markAllAsTouched();
      await this.presentToast('Review the highlighted fields before saving.', 'warning');
      return;
    }

    this.saving.set(true);
    try {
      await this.profileService.updateProfile(this.profileForm.getRawValue());
      this.editMode.set(false);
      await this.presentToast('Profile updated successfully.', 'success');
    } finally {
      this.saving.set(false);
    }
  }

  async updateProfileImage(): Promise<void> {
    const updated = await this.profileService.chooseProfileImage();
    if (updated) {
      await this.presentToast('Profile photo updated.', 'success');
    }
  }

  async confirmLogout(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Log out?',
      message: 'You will need to sign in again to access your account.',
      buttons: [
        { text: 'Cancel', role: 'cancel' },
        {
          text: 'Log out',
          role: 'destructive',
          handler: () => void this.navController.navigateRoot('/home'),
        },
      ],
    });
    await alert.present();
  }

  hasError(controlName: keyof EditableUserProfile, error: string): boolean {
    const control = this.profileForm.controls[controlName];
    return control.touched && control.hasError(error);
  }

  private resetForm(): void {
    const { name, email, mobile, address } = this.profile();
    this.profileForm.reset({ name, email, mobile, address });
  }

  private async initializeProfile(): Promise<void> {
    await this.profileService.initialize();
    this.resetForm();
  }

  private async presentToast(
    message: string,
    color: 'success' | 'warning',
  ): Promise<void> {
    const toast = await this.toastController.create({
      message,
      color,
      duration: 2200,
      position: 'bottom',
    });
    await toast.present();
  }
}
