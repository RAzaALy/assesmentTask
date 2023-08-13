import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './book.entity';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
  ) {}



  async getAllBooks(offset: number, limit: number): Promise<Book[]> {
    return this.bookRepository.find({
      skip: offset,
      take: limit,
    });
  }


}
