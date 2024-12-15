import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { TestModuleModule} from './app/test-module/test-module.module';


// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));


 platformBrowserDynamic().bootstrapModule(TestModuleModule)
   .catch(err => console.error(err));