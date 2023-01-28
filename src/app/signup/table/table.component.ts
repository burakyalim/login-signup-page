import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  
  @Input() tabledata: any[] = [];  
  
  // a:string="";

  Add(){
    console.log(this.tabledata)
    // this.tabledata.forEach(element => {
    //   this.a+=element.name
    // });
  }

}