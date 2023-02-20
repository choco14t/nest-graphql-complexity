import { Injectable } from '@nestjs/common';
import { Post } from './entities/post.entity';

const posts: Post[] = [
  { id: 1, title: 'post 1', author: { id: 1, name: 'author 1', posts: [] } },
  { id: 2, title: 'post 2', author: { id: 2, name: 'author 2', posts: [] } },
  { id: 3, title: 'post 3', author: { id: 3, name: 'author 3', posts: [] } },
];

@Injectable()
export class PostService {
  findAll(): Post[] {
    return posts;
  }

  findOne(id: number) {
    return posts.find((post) => post.id === id);
  }
}
