import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-sub',
  templateUrl: './list-sub.component.html',
  styleUrls: ['./list-sub.component.css']
})
export class ListSubComponent implements OnInit {

  @Input()
  list:any = [];

  @Output()
  detailLinkClicked = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }



  detail(kbId:number){
    this.detailLinkClicked.emit(kbId);
  }

}
