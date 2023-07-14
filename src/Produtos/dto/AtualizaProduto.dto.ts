import { IsArray, IsBoolean, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString} from "class-validator";

export class AtualizaProdutoDTO{;
    @IsString()
    @IsNotEmpty({message: "Nome não pode ser vazio"})
    Nome: string;

    @IsString()
    @IsNotEmpty({message: "Cor não pode ser vazio"})
    Cor: string;

    @IsBoolean()
    @IsNotEmpty({message: "Ativo não pode ser vazio"})
    Ativo: boolean;

    @IsNumber()
    @IsInt({message: "Valor Invalido"})
    Valor: number;

    @IsString({message: "Estoque Invalido"})
    Estoque: Number;
 
    @IsArray()
    @IsString({message: "Medidas inválido"})
    Medidas: Array<string>;

}
