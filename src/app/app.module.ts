import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
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
import { RouteDemoComponent } from './components/7-routes/routedemo.component';
import { RouteOneDemoComponent } from './components/7-routes/routeone.component';
import { RouteTwoDemoComponent } from './components/7-routes/routetwo.component';
import { Routes, RouterModule } from '@angular/router';
import { RouteGaurd } from './components/7-routes/route.gaurd.component';
import { FormDemoComponent } from './components/8-forms/form.component';


const route: Routes = [{
  path: 'routeone', component: RouteOneDemoComponent, canActivate : [RouteGaurd]
}, {
  path: 'routetwo/:id/:id2', component: RouteTwoDemoComponent , children :[
    {
      path: 'innerrouteone', component: RouteOneDemoComponent, outlet: 'inner'
    },{
      path: 'innerroutetwo', component: RouteTwoDemoComponent, outlet: 'inner1'
    }
  ]
},{
  path: 'lazy', loadChildren : './components/9-lazy-loading/lazyload.module#LazyModule'
}]


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
    PhoneDirective,
    RouteDemoComponent,
    RouteOneDemoComponent,
    RouteTwoDemoComponent,
    FormDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AmexioWidgetModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(route)
  ],
  providers: [
    PostService,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

