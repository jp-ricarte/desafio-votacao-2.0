import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guards/auth-guard';
import { PautasComponent } from './pages/pautas/pautas.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { PautaInformacoesComponent } from './pages/pauta-informacoes/pauta-informacoes.component';

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [],
    },
    {
        path: '',
        component: LayoutComponent,
        canActivate: [AuthGuard],
        children: [
            { path: 'pautas', component: PautasComponent },
            { path: 'pautas/:id', component: PautaInformacoesComponent },
            { path: '', redirectTo: 'pautas', pathMatch: 'full' },
        ],
    },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', redirectTo: '/login' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
