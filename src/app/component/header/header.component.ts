import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  ngOnInit() {
  }
  
  downloadPdf(): void {
    const pdfUrl = 'https://github.com/Apsit007/Apisit_introduce.github.io/raw/master/src/assets/Apisit%20Purisan.pdf'; // Replace with the actual PDF URL
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Apisit_Purisan.pdf'; // Specify the desired downloaded file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }



 


}
