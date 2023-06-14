import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CriaProdutoDto } from "./dto/produto.dto";
import { UsuarioEntity } from "src/usuario/usuario.entity";
import { ProdutosArmazenados } from "./produto.dm";
import {v4 as uuid} from 'uuid';
import { ListaProdutoDto } from "./dto/ListaProdutoDto";
import { AtualizaProdutoDTO } from "./dto/AtualizaProduto.dto";
import { error } from "console";
import { ProdutoEntity } from "./produto.entity";
import { get } from "http";


@Controller('/produto')
export class ProdutosController{
    constructor(private clsProdutoArmazenado: ProdutosArmazenados){
             
    }

    @Get()
    async RetornoProduto(){
        const ProdutoListado = await this.clsProdutoArmazenado.Produtos;
        const ProdutoRetorno = ProdutoListado.map(
            Produtos => new ListaProdutoDto(
                Produtos.id,
                Produtos.nome
            )
        );
        
        return ProdutoRetorno;
    }
     // fazer GET de filtro de usuário por nome ou email

    @Post()    
    async CriaProduto(@Body() dadosProduto: CriaProdutoDto){
       
        const Estoque = dadosProduto.Estoque;
        var Produtos = new ProdutoEntity(uuid(),dadosProduto.Nome,dadosProduto.Valor,dadosProduto.Ativo,
        Estoque,dadosProduto.Medidas,dadosProduto.Cor);
        
        var RetornoProduto;
            
        this.clsProdutoArmazenado.AdicionarProduto(Produtos);
        RetornoProduto={
            id: Produtos.Id,
            message:'Produto Criado'
        }
    
        
        return RetornoProduto;
    }
        @Put('/:id')        
        async AtualizaProduto(@Param('id') id: string, @Body()novosDados: AtualizaProdutoDTO){
        const UsuarioAtualizado = await this.clsProdutoArmazenado.AtualizaProduto(id,novosDados);
        return{
        usuario:AtualizaProdutoDTO,
        message:'Produtos Atualizado'
    }
    }
    @Delete('/:id')
       async RemoveProduto(@Param('id') id: string,){
        const ProdutoRemovido = await this.clsProdutoArmazenado.removerProduto(id);
        return{
        usuario:ProdutoRemovido,
        message:'Produto Removido'
        }
    }

    @Get('/cor/:cor')
    async consultaPorCor(@Param('cor') cor: string) {
        const listarProdutos = await this.clsProdutoArmazenado.Produtos;
        const produtosRetornados = listarProdutos.filter(
            element => (element.cor.find( e => e ===cor))
        ).map(
                produto => new ListaProdutoDto(
                    produto.Id,
                    produto.Nome
            )
        );
        return produtosRetornados;
    }
}


