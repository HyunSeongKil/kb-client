import { HttpClient } from '@angular/common/http';
import { AbstractJsEmitterVisitor } from '@angular/compiler/src/output/abstract_js_emitter';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalsService } from '../globals.service';

declare const jsVis: any;

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  @ViewChild('container') container!: ElementRef;

  list: any = [];

  constructor(
    private http: HttpClient,
    private router: Router,
    private globalsService: GlobalsService
  ) {}

  ngOnInit(): void {
    this.http
      .get(`${this.globalsService.apiServerUrl}/kbs`)
      .subscribe((res: any) => {
        this.list = res;

        this.network();
      });
  }

  network() {
    let nodes: any = [];
    let edges: any = [];

    this.list.forEach((x: any) => {
      if (null === x.parentKbId) {
        nodes.push({
          id: x.kbId,
          label: x.sj,
          shape: 'star',
          color: '#ff0000',
        });
        return;
      }

      nodes.push({ id: x.kbId, label: x.sj });
      edges.push({ from: x.kbId, to: x.parentKbId });
    });

    jsVis(this.container.nativeElement, nodes, edges);
  }

  detailLinkClicked(kbId: number) {
    this.router.navigate(['/detail', kbId]);
  }
}
