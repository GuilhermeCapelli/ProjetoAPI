import { Module } from "@nestjs/common";
import { ProdutosController } from "./produto.controller";
import { ProdutosArmazenados } from "./produto.dm";



@Module({
    controllers:[ProdutosController],
    providers:[ProdutosArmazenados]
})
export class ProdutoModule{

}