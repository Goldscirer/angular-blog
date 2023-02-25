import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';
import { ArticlesComponent } from './articles/articles.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ArticleService } from './articles/services/articles.service';
import { AuthInterceptorService } from './auth-interceptor.service';
import { FooterComponent } from './footer/footer.component';
import { ReadMoreButtonComponent } from './card/read-more-button/read-more-button.component';
import { PostPageComponent } from './post-page/post-page.component';
import { RouterModule } from '@angular/router';
import { routes } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardComponent,
    ArticlesComponent,
    FooterComponent,
    ReadMoreButtonComponent,
    PostPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes) 
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },
    ArticleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
