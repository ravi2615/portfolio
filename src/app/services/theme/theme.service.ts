import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  dark=false;
  constructor() {
    if(localStorage.getItem('theme'))
    this.dark= localStorage.getItem('theme')=='dark'?true:false;
    // console.log(this.dark)
   }
}
