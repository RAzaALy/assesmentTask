import { isNotEmpty } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

import { IsNotEmpty } from "class-validator"

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  title: string;

  @Column()
  discount: number;

  @Column()
  price: number; 
  
  @Column()
  cover: string;

  @Column()
  description: string;

  // Add more columns as needed
}
