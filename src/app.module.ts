import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorModule } from './author/author.module';
import { ComplexityPlugin } from './common/complexity.plugin';
import { PostModule } from './post/post.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    AuthorModule,
    PostModule,
    ComplexityPlugin,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
