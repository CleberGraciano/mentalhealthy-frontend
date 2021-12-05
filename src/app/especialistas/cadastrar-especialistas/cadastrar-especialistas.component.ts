import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastrar-especialistas',
  templateUrl: './cadastrar-especialistas.component.html',
  styleUrls: ['./cadastrar-especialistas.component.css']
})
export class CadastrarEspecialistasComponent implements OnInit {

  constructor(private router: Router, private activatedRoute:ActivatedRoute) { 
  }

  ngOnInit(): void {
  }

}
