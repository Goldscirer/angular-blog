import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ArticlesComponent } from './articles/articles.component';
import { PostPageComponent } from './post-page/post-page.component';

export const routes: Routes = [
  { path: '', component: ArticlesComponent },
  { path: 'post/:id', component: PostPageComponent },
  { path: '**', component: ArticlesComponent }
];1

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
