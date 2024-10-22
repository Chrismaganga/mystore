import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { SearchResultsComponent } from './search-results/search-results.component';


export const routes: Routes = [
  {
    path: 'products',
    component: ProductListComponent,
    children: [
      {
        path: 'products/:id',
        component: ProductDetailComponent,
      },
      {
        path: 'products',
        component: PageNotFoundComponent,
      },
    ]

  },
   { path: '', redirectTo: '/products', pathMatch: 'full' },
   { path: 'search', component: SearchResultsComponent }, 
];
