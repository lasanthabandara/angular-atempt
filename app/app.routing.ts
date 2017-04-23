import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectsComponent }      from './components/projects/projects.component';
import { BlogsComponent }      from './components/blogs/blogs.component';
import { VideosComponent }      from './components/videos/videos.component';
import { ContactsComponent }      from './components/contacts/contacts.component';
import { AboutComponent }      from './components/about/about.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const appRoutes: Routes = [
    {
        path: 'projects',
        component: ProjectsComponent
    },
    {
        path: 'blogs',
        component: BlogsComponent
    },
    {
        path: 'videos',
        component: VideosComponent
    },
    {
        path: 'contacts',
        component: ContactsComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);