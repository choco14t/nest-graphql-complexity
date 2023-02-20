import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Author } from 'src/author/entities/author.entity';

@ObjectType()
export class Post {
  @Field(() => ID)
  id: number;

  @Field()
  title: string;

  @Field(() => Author)
  author: Author;
}
