import { IsArray, IsBoolean, IsInt, IsNotEmpty, IsString} from "class-validator";

export class CriaProdutoDto{;
    @IsString()
    @IsNotEmpty({message: "Nome não pode ser vazio"})
    Nome: string;

    @IsString()
    @IsNotEmpty({message: "Cor não pode ser vazio"})
    Cor: string;

    @IsString()
    @IsNotEmpty({message: "Ativo não pode ser vazio"})
    Ativo: string;

    @IsBoolean()
    @IsInt({message: "Valor Invalido"})
    Valor: Boolean;

    @IsString({message: "Estoque Invalido"})
    Estoque: BigInteger;
 
    @IsArray()
    @IsString({message: "Medidas inválido"})
    Medidas: Array<string>;
}