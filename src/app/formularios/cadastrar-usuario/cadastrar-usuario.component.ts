import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/Usuario';


@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css']
})


export class CadastrarUsuarioComponent implements OnInit {
usuario: Usuario;

public instanciarUsuario(){
  
}
  
  
    
  constructor() { }
  ngOnInit() {
  }

}
