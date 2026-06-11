export interface UserProfile {
  name: string;
  email: string;
  mobile: string;
  address: string;
  avatarUrl: string | null;
  totalOrders: number;
  ordersDelivered: number;
}

export type EditableUserProfile = Pick<UserProfile, 'name' | 'email' | 'mobile' | 'address'>;
