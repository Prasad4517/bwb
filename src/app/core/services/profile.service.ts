import { Injectable, computed, signal } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Preferences } from '@capacitor/preferences';
import { ActionSheetController } from '@ionic/angular';
import { EditableUserProfile, UserProfile } from '../models/user-profile.model';

const PROFILE_STORAGE_KEY = 'userProfile';
const PROFILE_IMAGE_STORAGE_KEY = 'profileImage';

const DEFAULT_PROFILE: UserProfile = {
  name: 'Prasad Waghamare',
  email: 'prasadwaghamare2002@example.com',
  mobile: '+91-9876543210',
  address: 'Flat No. 12, Green Park Society, Pune, Maharashtra, India - 411038',
  avatarUrl: null,
  totalOrders: 15,
  ordersDelivered: 13,
};

@Injectable({ providedIn: 'root' })
export class ProfileService {
  private readonly profileState = signal<UserProfile>(DEFAULT_PROFILE);

  readonly profile = this.profileState.asReadonly();
  readonly avatarUrl = computed(() => this.profileState().avatarUrl);

  constructor(private readonly actionSheetController: ActionSheetController) {}

  async initialize(): Promise<void> {
    const [{ value: storedProfile }, { value: storedImage }] = await Promise.all([
      Preferences.get({ key: PROFILE_STORAGE_KEY }),
      Preferences.get({ key: PROFILE_IMAGE_STORAGE_KEY }),
    ]);

    let profile = DEFAULT_PROFILE;
    if (storedProfile) {
      try {
        profile = { ...DEFAULT_PROFILE, ...JSON.parse(storedProfile) as Partial<UserProfile> };
      } catch {
        await Preferences.remove({ key: PROFILE_STORAGE_KEY });
      }
    }

    this.profileState.set({ ...profile, avatarUrl: storedImage ?? profile.avatarUrl });
  }

  async updateProfile(changes: EditableUserProfile): Promise<void> {
    const profile = { ...this.profileState(), ...changes };
    this.profileState.set(profile);
    await Preferences.set({ key: PROFILE_STORAGE_KEY, value: JSON.stringify(profile) });
  }

  async chooseProfileImage(): Promise<boolean> {
    let selectedSource: CameraSource | null = null;
    const actionSheet = await this.actionSheetController.create({
      header: 'Update profile photo',
      cssClass: 'app-action-sheet',
      buttons: [
        {
          text: 'Take photo',
          icon: 'camera-outline',
          handler: () => {
            selectedSource = CameraSource.Camera;
          },
        },
        {
          text: 'Choose from gallery',
          icon: 'image-outline',
          handler: () => {
            selectedSource = CameraSource.Photos;
          },
        },
        {
          text: 'Cancel',
          icon: 'close-outline',
          role: 'cancel',
        },
      ],
    });

    await actionSheet.present();
    await actionSheet.onDidDismiss();

    return selectedSource === null ? false : this.captureImage(selectedSource);
  }

  private async captureImage(source: CameraSource): Promise<boolean> {
    try {
      const image = await Camera.getPhoto({
        quality: 85,
        allowEditing: true,
        resultType: CameraResultType.Uri,
        source,
      });

      if (!image.webPath) {
        return false;
      }

      this.profileState.update(profile => ({ ...profile, avatarUrl: image.webPath ?? null }));
      await Preferences.set({ key: PROFILE_IMAGE_STORAGE_KEY, value: image.webPath });
      return true;
    } catch {
      return false;
    }
  }
}
