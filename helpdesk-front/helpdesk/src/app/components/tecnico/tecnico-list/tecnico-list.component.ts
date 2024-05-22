import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Tecnico } from 'src/app/models/tecnico';

@Component({
  selector: 'app-tecnico-list',
  templateUrl: './tecnico-list.component.html',
  styleUrls: ['./tecnico-list.component.css']
})
export class TecnicoListComponent implements OnInit {
  ELEMENT_DATA: Tecnico[] = [
    {
      id: 1,
      nome: 'João',
      cpf: '12345678901',
      email: 'joao@gmail.com',
      senha: '123456',
      perfis: ['0'],
      dataCriacao: '15/08/2021'
    },
    {
      id: 2,
      nome: 'Marcelo',
      cpf: '12345678901',
      email: 'marcelo@gmail.com',
      senha: '123456',
      perfis: ['0'],
      dataCriacao: '15/08/2023'
    }
  ];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'actions'];
  dataSource = new MatTableDataSource<Tecnico>(this.ELEMENT_DATA);

  constructor() { }

  ngOnInit(): void {
  }


  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}