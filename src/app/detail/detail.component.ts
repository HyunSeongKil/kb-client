import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  kbId:number = -1;

  subs:any = [];

  dto:any = {};

  

  constructor(private http:HttpClient, private router:Router, route: ActivatedRoute) {
    this.kbId = route.snapshot.params['kbId'];
   }

  ngOnInit(): void {
    this.loadDetail();
    this.loadList();
  }
  
  
  loadDetail(){
      this.http.get(`http://localhost:58080/kb/kbs/${this.kbId}`)
        .subscribe((res:any)=>{
          this.dto = res;
        });
      
    }
    
  loadList(){
    this.http.get(`http://localhost:58080/kb/kbs?parentKbId=${this.kbId}`)
      .subscribe((res:any)=>{
        this.subs = res;
      });
      

  }


  regist(){
    this.router.navigate(['/regist', this.kbId]);
  }

  updt(){
    this.router.navigate(['/updt', this.kbId]);
  }

  delete(){
    if(!confirm('삭제하시겠습니까?')){
      return;
    }

    this.http.delete(`http://localhost:58080/kb/kbs/${this.kbId}`)
      .subscribe((res:any)=>{
        this.list();
      })
  }

  list(){
    this.router.navigate(['/list']);
  }


  detailLinkClicked(_kbId:number){
    this.kbId = _kbId;

    this.loadDetail();
    this.loadList();
  }
}
