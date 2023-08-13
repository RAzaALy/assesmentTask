import { Controller, Query, Get, Body } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './book.entity';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}



  @Get()
  async getAllBooks(
    @Query('offset') offset: number = 0,
    @Query('limit') limit: number = 10,
  ): Promise<Book[]> {
    return this.bookService.getAllBooks(offset, limit);
  }
}
