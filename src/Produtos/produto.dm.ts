import { Get, Injectable, Param } from "@nestjs/common";
import { ProdutoEntity } from "./produto.entity";
import { error } from "console";
import { AtualizaProdutoDTO } from "./dto/AtualizaProduto.dto";
import { async } from "rxjs";
import { ListaProdutoDto } from "./dto/ListaProdutoDto";
import { listaUsuarioDTO } from "src/usuario/dto/listaUsuario.dto";

@Injectable()
export class ProdutosArmazenados{
    #Produtos: ProdutoEntity[] = [];    
    clsArmazenaProduto: any;

    AdicionarProduto(usuario: ProdutoEntity){
        this.Produtos.push(this.Produtos);
    }

    get Produtos(){        
    return this.Produtos;
    }

    async AtualizaProduto(Id:String, dadosAtualizacao:Partial<AtualizaProdutoDTO>){
        const possivelProduto = this.Produtos.find(
            ProdutosArmazenados =>ProdutosArmazenados.Id === Id
            );
            
            if(!possivelProduto){
                throw new error('Produto não Encontrado');
            }
            Object.entries(dadosAtualizacao).forEach(
                ([chave, valor])=>{
                        if (chave ==='Id'){
                        return;
                        }
                        possivelProduto[chave] = valor;
                }
            );
        return possivelProduto;
    }  

    private buscaporID(Id:string){
        const possivelProduto = this.Produtos.find(
                ProdutosArmazenados =>ProdutosArmazenados.id ===Id  
            );
            if (!possivelProduto){
                throw new error('Produto não Encontrado');
            }
            return possivelProduto
    }

   

    async removerProduto (Id:string){
        const Produto = this.buscaporID(Id);
        this.#Produtos = this.Produtos.filter(
            ProdutosArmazenados => ProdutosArmazenados.Id !==Id
            )
            return Produto;
        }
    // async listarProduto(){
    // const Lista = this.#Produtos;
    // this.#Produtos = this.Produtos.map(
    //     ProdutosArmazenados => ProdutosArmazenados.map
    // )
    // return this.Produtos;
    // }
}


