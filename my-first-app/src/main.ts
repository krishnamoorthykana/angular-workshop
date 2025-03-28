import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { TestModModule } from './app/test-mod/test-mod.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


//  platformBrowserDynamic().bootstrapModule(TestModModule)
//    .catch(err => console.error(err));