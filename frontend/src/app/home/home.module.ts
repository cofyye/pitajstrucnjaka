import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { ExpertCardComponent } from './expert-card/expert-card.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { ExpertCarouselComponent } from './expert-carousel/expert-carousel.component';
import { FooterComponent } from './footer/footer.component';
import { InputTextModule } from 'primeng/inputtext';
import { HeroComponent } from './hero/hero.component';
import { NavComponent } from './nav/nav.component';
import { FaqComponent } from './faq/faq.component';
import { AccordionModule } from 'primeng/accordion';

@NgModule({
  declarations: [
    HomeComponent,
    ExpertCardComponent,
    ExpertCarouselComponent,
    FooterComponent,
    HeroComponent,
    NavComponent,
    FaqComponent,
  ],
  exports: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule,
    InputTextModule,
    AccordionModule,
    CardModule,
    CarouselModule,
    ButtonModule,
    AccordionModule,
  ],
})
export class HomeModule {}
