import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdtComponent } from './updt.component';

describe('UpdtComponent', () => {
  let component: UpdtComponent;
  let fixture: ComponentFixture<UpdtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
