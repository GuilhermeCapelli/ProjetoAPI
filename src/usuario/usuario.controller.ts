import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CriaUsuarioDTO } from "./dto/usuario.dto";
import { UsuarioEntity } from "./usuario.entity";
import { UsuariosArmazenados } from "./usuario.dm";
import {v4 as uuid} from 'uuid';
import { listaUsuarioDTO } from "./dto/listaUsuario.dto";
import { AtualizaUsuarioDTO } from "./dto/AtualizaUsuario.dto";
import { error } from "console";

@Controller('/usuarios')
export class UsuarioController{
    constructor(private clsUsuariosArmazenados: UsuariosArmazenados){
             
    }

    @Get()
    async RetornoUsuarios(){
        const usuariosListados = await this.clsUsuariosArmazenados.Usuarios;
        const listaRetorno = usuariosListados.map(
            usuario => new listaUsuarioDTO(
                usuario.id,
                usuario.nome
            )
        );
        
        return listaRetorno;
    }
     // fazer GET de filtro de usuário por nome ou email

    @Post()    
    async criaUsuario(@Body() dadosUsuario: CriaUsuarioDTO){
       
        var usuario = new UsuarioEntity(uuid(),dadosUsuario.nome,dadosUsuario.idade,dadosUsuario.cidade,dadosUsuario.email,dadosUsuario.telefone,dadosUsuario.senha);
        
        var retornoUsuario;
            
        this.clsUsuariosArmazenados.AdicionarUsuario(usuario);
        retornoUsuario={
            id: usuario.id,
            message:'Usuário Criado'
        }
    
        
        return retornoUsuario;
    }
        @Put('/:id')        
        async AtualizaUsuario(@Param('id') id: string, @Body()novosDados: AtualizaUsuarioDTO){
        const UsuarioAtualizado = await this.clsUsuariosArmazenados.AtualizaUsuario(id,novosDados);
        return{
        usuario:UsuarioAtualizado,
        message:'Usuario Atualizado'
    }
    }
    @Delete('/:id')
       async RemoveUsuario(@Param('id') id: string,){
        const usuarioRemovido = await this.clsUsuariosArmazenados.removerUsuario(id);
        return{
        usuario:usuarioRemovido,
        message:'Usuario Removido'
        }
    }
}
