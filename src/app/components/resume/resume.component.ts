
import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // element;
  download(){
    // if(confirm("Full PDF is downlable in desktop/laptop")){
          var data = document.getElementById('area-cv');
      html2canvas(data).then(canvas => {
      // Few necessary setting options
      var imgWidth = 208;
      var pageHeight = 295;
      // var imgHeight = canvas.height * imgWidth / canvas.width;
      // var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
      var position = 0;
      pdf.link(5,53,54.5,3, {url: 'mailto:ravishankar2615@gmail.com'});
      pdf.link(5,81,49,3, {url: 'https://www.linkedin.com/in/ravi-shankar-1a008a194'});
      pdf.link(5,87,30,3, {url: 'https://auth.geeksforgeeks.org/user/premravi2615/'});
      pdf.link(5,93,24,3, {url: 'https://www.codechef.com/users/prem2615'});
      pdf.link(5,99,22,3, {url: 'https://github.com/ravi2615'});
      pdf.link(5,105,35,3, {url: 'https://www.hackerrank.com/ravishankar2615'});
      
      pdf.link(73,129,85,4.5, {url: 'https://github.com/ravi2615/realtime_pizza'});
      
      pdf.link(161,131,38,4.5, {url: 'https://audio-app-963b5.web.app/'});
      pdf.link(161,133,32,4.5, {url: 'https://audio-app-963b5.web.app/'});
      
      pdf.link(100,165,26,4.5, {url: 'https://github.com/ravi2615/realtime_pizza'});
      pdf.link(73,168.5,42,4.5, {url: 'https://github.com/ravi2615/realtime_pizza'});
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, pageHeight)
      pdf.save('Ravi_Shankar_Resume.pdf'); // Generated PDF
      });
    }
  // }

}
