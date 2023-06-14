import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { ProdutoModule } from './Produtos/produtos.module';


@Module({
  imports: [UsuarioModule, ProdutoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
