import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from "./index.component";
import {AppCustomPreloader} from "./app-routing-loader";
import {CatalogComponent} from "./catalog.component";


const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'catalog', component: CatalogComponent, data: {preload: true}},
  {path: '', component: IndexComponent},
  {
    path: 'feature-2',
    loadChildren: './feature-2/feature-2.module#Feature2Module',
    data: {preload: true}
  },
  // {
  //   path: 'catalog',
  //   loadChildren: './catalog/catalog.module#CatalogModule',
  //   data: {preload: true}
  //   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // imports: [RouterModule.forRoot(routes, { preloadingStrategy: AppCustomPreloader })],
  exports: [RouterModule],
  providers: [AppCustomPreloader]
})
export class AppRoutingModule {
}
