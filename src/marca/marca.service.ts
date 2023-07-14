import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Marca } from './marca.entity';

@Injectable()
export class MarcaService {
  constructor(
    @Inject('MARCA_REPOSITORY')
    private marcaRepository: Repository<Marca>,
  ) {}

  async listar(): Promise<Marca[]> {
    return this.marcaRepository.find();
  }

  async inserir(): Promise<void> {
  }

  localizarId(id:String){
    return this.marcaRepository.findOne

  }
  async remove(id:String): Promise<void>{
    const user = await this.localizarId(id);
    await this.marcaRepository.remove(user);
  }
}

