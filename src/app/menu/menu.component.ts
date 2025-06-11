import { Component, OnInit,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone:true,
  imports:[IonicModule],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class MenuComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
