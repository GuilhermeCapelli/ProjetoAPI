import { Controller, Delete, Get, Param } from "@nestjs/common";
import { MarcaService } from "./marca.service";
import { Marca } from "./marca.entity";

@Controller('/marca')
export class MarcaController{

    constructor (private readonly marcaService: MarcaService){
    }
        @Get('listar')
            async listar(): Promise<Marca[]>{
                return this.marcaService.listar();
            }
        
        @Get('ID:id')
        async listarID (@Param('id')id: string): Promise<Marca>{
            return this.marcaService.localizarId();
        }
        @Delete('remove-:id')
        async removeMarca (@Param('id')id: string): Promise<void>{
            this.marcaService.remove(id);
        }
}