import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { RegistComponent } from './regist/regist.component';
import { DetailComponent } from './detail/detail.component';
import { ListSubComponent } from './list-sub/list-sub.component';
import { UpdtComponent } from './updt/updt.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    RegistComponent,
    DetailComponent,
    ListSubComponent,
    UpdtComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', redirectTo: '/list', pathMatch: 'full'},
      {path: 'list', component: ListComponent},
      {path: 'regist/:parentKbId', component: RegistComponent},
      {path: 'detail/:kbId', component: DetailComponent},
      {path: 'updt/:kbId', component: UpdtComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
