import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { routing } from './app.routing';
import { AppComponent } from './components/app.component';

import { HeroService }         from './services/hero.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { BlogsComponent }      from './components/blogs/blogs.component';
import { VideosComponent }      from './components/videos/videos.component';
import { AboutComponent }      from './components/about/about.component';
import { ContactsComponent }      from './components/contacts/contacts.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        HttpModule
    ],
    declarations: [
        AppComponent,
        ProjectsComponent,
        BlogsComponent,
        VideosComponent,
        ContactsComponent,
        AboutComponent,
        DashboardComponent
    ],
    providers: [
        HeroService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }