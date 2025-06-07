import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { register } from 'swiper/element/bundle';

// Register Swiper's custom elements globally
register();
// Bootstrap Angular
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
