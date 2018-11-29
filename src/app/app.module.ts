import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { AmexioWidgetModule } from 'amexio-ng-extensions';
import { GreetingsComponent } from './components/1-greetings/greetings.component';
import { BindingComponent } from './components/2-binding/binding.component';
import { PipeComponent } from './components/3-pipe/pipe.component';
import { FilterPipe } from './components/3-pipe/filter.pipe';
import { ListComponent } from './components/4-reusable-components/list.component';
import { InbuiltComponent } from './components/5-directives/inbuilt.component';
import { InputFormatDirective } from './components/5-directives/custom.directive';
import { PhoneDirective } from './components/5-directives/phone.directive';
import { HttpDemoComponent } from './components/6-http-service/httpdemo.component';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './components/6-http-service/post.service';
import { AppErrorHandler } from './errors/app.error.handler';

@NgModule({
  declarations: [
    AppComponent,
    GreetingsComponent,
    BindingComponent,
    PipeComponent,
    ListComponent,
    InbuiltComponent,
    FilterPipe,
    HttpDemoComponent,
    InputFormatDirective,
    PhoneDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AmexioWidgetModule,
    HttpClientModule
  ],
  providers: [
    PostService,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

