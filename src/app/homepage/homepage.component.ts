import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CardetailsComponent } from '../cardetails/cardetails.component';
 


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  opendialog(){
    const dialogref=this.dialog.open(CardetailsComponent);

    dialogref.afterClosed().subscribe(result => {
      console.log('Dialog result: ${result}');
    })
  }

  ngOnInit(): void {
  }
}
