import { Component, OnInit } from '@angular/core';
import { TransictionsService, Trans } from '../../../sharedService/transictions.service';
@Component({
  selector: 'app-shared-table',
  templateUrl: './shared-table.component.html',
  styleUrls: ['./shared-table.component.css']
})
export class SharedTableComponent implements OnInit {
  transictions: Trans[];
  id: string;
  constructor(private trans: TransictionsService) { }

  ngOnInit(): void {
    this.getData()
  }
  getData() {
    this.trans.getTrans().then((response) => {
      this.transictions = response
    })
  }

  searchById() {
    if (this.id !== '') {
      this.transictions = this.transictions.filter((res) => {
        return res.id.match(this.id)
      })
    } else if (this.id == '') {
      this.getData();
    }

  }


}
