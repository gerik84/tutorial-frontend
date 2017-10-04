import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from './components/index/index.component';
import {CatalogComponent} from './components/catalog/catalog.component';


const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'catalog', component: CatalogComponent,  data: {
    breadcrumb: "Sign In"
  }},
  {
    path: '',
    component: IndexComponent,

  },
  // {
  //   path: 'feature-2',
  //   loadChildren: './feature-2/feature-2.module#Feature2Module',
  //   data: {preload: true}
  // },
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
  providers: []
})
export class AppRoutingModule {
}
