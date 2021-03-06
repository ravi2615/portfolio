
import { SocialService } from './services/social/social.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AboutComponent } from './components/about/about.component';
import { ProjectComponent } from './components/project/project.component';
import { SkillComponent } from './components/skill/skill.component';
import { ContactComponent } from './components/contact/contact.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { FooterComponent } from './components/footer/footer.component';
import { SkillService } from './services/skill/skill.service';
import { ProjectsService } from './services/projects/projects.service';
import { ExpreinceService } from './services/expereince/expreince.service';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { DialogComponent } from './components/project/dialog/dialog.component';
import { ResumeComponent } from './components/resume/resume.component';
import { TestimonialService } from './services/testimonial/testimonial.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    HeaderComponent,
    AboutComponent,
    ProjectComponent,
    SkillComponent,
    ContactComponent,
    ExperienceComponent,
    FooterComponent,
    TestimonialComponent,
    DialogComponent,
    ResumeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [SkillService, ProjectsService, SocialService,ExpreinceService,TestimonialService],
  bootstrap: [AppComponent]
})
export class AppModule { }
