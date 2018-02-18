import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	// public, private
	private nombre:any; //Declarar tipo de Dato por buenas prácticas
  //Tipos de datos: string, int, float, number, boolean, etc
  // any (Tipo de dato dinámico) hace que la variable sea lo que quieran :v 
  constructor() { 
  	this.nombre="Edwin";
  }

  ngOnInit() { //Por buenas prácticas 
  	//Let define una variable que cambia su valor.
  	let variablex:string="lalala";
  	
  	//const define una variable y esta no cambia su valor
  	const variabley:string="lololo";



  }

}
