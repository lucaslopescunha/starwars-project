import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridPesquisaComponent } from './grid-pesquisa.component';

describe('GridPesquisaComponent', () => {
  let component: GridPesquisaComponent;
  let fixture: ComponentFixture<GridPesquisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridPesquisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
