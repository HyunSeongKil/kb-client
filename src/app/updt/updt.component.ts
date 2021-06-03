import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updt',
  templateUrl: './updt.component.html',
  styleUrls: ['./updt.component.css']
})
export class UpdtComponent implements OnInit {

  @ViewChild("sj") sjRef! : ElementRef;
  @ViewChild("cn") cnRef! : ElementRef;
  @ViewChild("url") urlRef! : ElementRef;

  kbId:number = -1;
  dto:any={};

  constructor(private http:HttpClient, private router:Router, route:ActivatedRoute) {
    this.kbId = route.snapshot.params['kbId'];
   }

  ngOnInit(): void {
    this.loadDetail();
  }

  loadDetail(){
    this.http.get(`http://localhost:58080/kb/kbs/${this.kbId}`)
      .subscribe((res:any)=>{
        this.dto = res;
        console.log(this.dto);
      });
    
  }

  updt(){
    if(!confirm('수정하시겠습니까?')){
      return;
    }


    let data = {
      kbId: this.dto.kbId,
      parentKbId: this.dto.parentKbId,
      sj : this.sjRef.nativeElement.value,
      cn: this.cnRef.nativeElement.value,
      url: this.urlRef.nativeElement.value,
    }

    this.http.put(`http://localhost:58080/kb/kbs`, data)
      .subscribe((res:any)=>{
        this.cancel();
      });
  }


  cancel(){
    this.router.navigate(['/list']);
  }

}
