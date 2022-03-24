import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailComponent } from 'src/app/components/movie-detail/movie-detail.component';
import { SearchComponent } from 'src/app/components/search/search.component';
import { WatchListComponent } from 'src/app/components/watch-list/watch-list.component';

const routes: Routes = [
    { path: 'search', component: SearchComponent },
    { path: 'watch-list', component: WatchListComponent },
    { path: 'search/:id', component: MovieDetailComponent },
    { path: '', redirectTo: '/search', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }