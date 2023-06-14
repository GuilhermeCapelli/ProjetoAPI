import { IsEmail, IsInt, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

export class AtualizaUsuarioDTO{
    @IsString()
    @IsNotEmpty({message: "Nome não pode ser vazio"})
    @IsOptional()
    nome: string;

    @IsEmail(undefined,{message: "Email inválido"})
    @IsOptional()
    email:string;

    @MinLength(6,{message: "Tamanho da senha inválido"})
    @IsOptional()
    senha:string;

    @IsInt({message: "Idade inválida"})
    @IsOptional()
    idade: BigInteger;

    @IsString({message: "Cidade inválida"})
    @IsOptional()
    cidade: string;
    
    @IsString({message: "Telefone inválido"})
    @IsOptional()
    telefone: string;
}