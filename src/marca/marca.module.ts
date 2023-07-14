import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { marcaProviders } from './marca.providers';
import { MarcaService } from './marca.service';
import { MarcaController } from './marca.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [MarcaController],
  providers: [
    ...marcaProviders,
    MarcaService,
  ],
})
export class MarcaModule {}