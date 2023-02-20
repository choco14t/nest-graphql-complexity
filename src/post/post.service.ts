import { Injectable } from '@nestjs/common';
import { Post } from './entities/post.entity';

const posts: Post[] = [
  { id: 1, title: 'post 1' },
  { id: 2, title: 'post 2' },
  { id: 3, title: 'post 3' },
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
