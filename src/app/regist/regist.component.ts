import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-regist',
  templateUrl: './regist.component.html',
  styleUrls: ['./regist.component.css']
})
export class RegistComponent implements OnInit {

  @ViewChild("sj") sj!: ElementRef;
  @ViewChild("cn") cn!: ElementRef;
  @ViewChild("url") url!: ElementRef;

  parentKbId:number = -1;
  dto:any = {};

  constructor(private http:HttpClient, private router:Router, route:ActivatedRoute) {
    this.parentKbId = route.snapshot.params['parentKbId'];
   }

  ngOnInit(): void {
    
  }


  regist(){
    if(!confirm('등록하시겠습니까?')){
      return;
    }


    const body = {
      parentKbId : this.parentKbId,
      sj : this.sj.nativeElement.value,
      cn : this.cn.nativeElement.value,
      url : this.url.nativeElement.value,
    };


    this.http.post('http://localhost:58080/kb/kbs', body)
      .subscribe((res:any)=>{
        console.log(res);

        this.cancel();
      });
  }


  cancel(){
    this.router.navigate(['/list']);
  }

}
