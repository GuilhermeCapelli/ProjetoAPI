import { Injectable } from "@nestjs/common";
import { UsuarioEntity } from "./usuario.entity";
import { error } from "console";

@Injectable()
export class UsuariosArmazenados{
    #usuarios: UsuarioEntity[] = [];    

    AdicionarUsuario(usuario: UsuarioEntity){
        this.#usuarios.push(usuario);
    }

    get Usuarios(){        
        return this.#usuarios;
    }

    async validaEmail(email: string){
        const possivelUsuario = this.#usuarios.find(
            usuario => usuario.email === email  
        );
        return (possivelUsuario !== undefined);
    }
    

    async AtualizaUsuario(id:String, dadosAtualização:Partial<UsuarioEntity>){
        const possivelUsuario = this.#usuarios.find(
            UsuariosArmazenados =>UsuariosArmazenados.id === id
            );
            
            if(!possivelUsuario){
                throw new error('Usuario não Encontrado');
            }
            Object.entries(dadosAtualização).forEach(
                ([chave, valor])=>{
                        if (chave ==='id'){
                        return;
                        }
                        possivelUsuario[chave] = valor;
                }
            );
        return possivelUsuario;
    }  

    private buscaporID(id:string){
        const possivelUsuario = this.#usuarios.find(
                UsuariosArmazenados =>UsuariosArmazenados.id ===id
            );
            if (!possivelUsuario){
                throw new error('Usuario não Encontrado');
            }
            return possivelUsuario
    }

    async removerUsuario (id:string){
        const usuario = this.buscaporID(id);
        this.#usuarios = this.#usuarios.filter(
            UsuariosArmazenados => UsuariosArmazenados.id !==id 
            )
            return usuario;
        }
}
