import { Component, OnInit } from '@angular/core';
import { TestimonialService } from 'src/app/services/testimonial/testimonial.service';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent implements OnInit {


  testimonial={}
  constructor( private testimonialService:TestimonialService) { }

  ngOnInit(): void {
    this.testimonial = this.testimonialService.getTestimonial();
  }
}
