import { UUID } from "crypto";

export class ProdutoEntity{
    Id: string;
    Nome: string;
    Ativo: Boolean;
    Valor: String;
    Estoque: BigInteger;
    Medidas: Array<string>;
    Cor: string;
    constructor(Id:string, Nome:string, Ativo:Boolean, Valor:String, 
        Estoque:BigInteger, Medidas:Array<string>, Cor:string){

        this.Id = Id;
        this.Nome = Nome;
        this.Ativo = Ativo;
        this.Valor = Valor;
        this.Estoque = Estoque;
        this.Medidas = Medidas;
        this.Cor = Cor;
    }
    
    get valor(){
        return '***********'
    }
    set valor(ValorNovo){
        this.Valor = ValorNovo;
    }
}