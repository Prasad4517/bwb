import { Component, input } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class AppHeaderComponent {
  readonly title = input('BWB');
  readonly unreadCount = input(0);
}
