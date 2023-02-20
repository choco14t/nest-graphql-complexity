import { Injectable } from '@nestjs/common';
import { Author } from './entities/author.entity';

const authors: Author[] = [
  { id: 1, name: 'author 1' },
  { id: 2, name: 'author 2' },
  { id: 3, name: 'author 3' },
];

@Injectable()
export class AuthorService {
  findAll(): Author[] {
    return authors;
  }

  findOne(id: number): Author | undefined {
    return authors.find((author) => author.id === id);
  }
}
