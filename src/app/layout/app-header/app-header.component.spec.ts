import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AppHeaderComponent } from './app-header.component';

describe('AppHeaderComponent', () => {
  let fixture: ComponentFixture<AppHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppHeaderComponent, IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(AppHeaderComponent);
    fixture.detectChanges();
  });

  it('should target the notifications menu from the notification button', () => {
    const toggle = fixture.nativeElement.querySelector('ion-menu-toggle') as HTMLElement;
    const button = fixture.nativeElement.querySelector('.notification-button') as HTMLElement;

    expect(toggle.getAttribute('menu')).toBe('notificationsMenu');
    expect(toggle.getAttribute('autoHide')).toBe('false');
    expect(button.getAttribute('aria-label')).toBe('Open notifications');
  });
});
