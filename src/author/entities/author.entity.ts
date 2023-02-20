import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Post } from 'src/post/entities/post.entity';

@ObjectType()
export class Author {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field(() => [Post])
  posts: Post[];
}
