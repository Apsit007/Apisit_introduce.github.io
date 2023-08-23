import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  pdfUrl = "../../../assets/Apisit Purisan.pdf";
  ngOnInit() {
  }
  
  downloadPdf(): void {
    const pdfUrl = '/assets/Apisit Purisan.pdf'; // Replace with the actual PDF URL
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Apisit_Purisan.pdf'; // Specify the desired downloaded file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }



 


}
