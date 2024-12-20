import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guards/auth-guard';
import { PautasComponent } from './pages/pautas/pautas.component';

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [],
    },
    {
        path: 'pautas',
        component: PautasComponent,
        canActivate: [AuthGuard],
      },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', redirectTo: '/login' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
