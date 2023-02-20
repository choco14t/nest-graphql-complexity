import {
  Resolver,
  Query,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { Post } from 'src/post/entities/post.entity';
import { AuthorService } from './author.service';
import { Author } from './entities/author.entity';

@Resolver(() => Author)
export class AuthorResolver {
  constructor(private readonly authorService: AuthorService) {}

  @Query(() => [Author], { name: 'authors' })
  findAll() {
    return this.authorService.findAll();
  }

  @Query(() => Author, { name: 'author' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.authorService.findOne(id);
  }

  @ResolveField(() => [Post])
  posts(@Parent() author: Author) {
    return author.posts;
  }
}
