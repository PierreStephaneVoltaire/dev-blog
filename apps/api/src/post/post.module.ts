import { Module } from '@nestjs/common';
import { PostEntity } from './post.entity';
import { PostController } from './post.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostService } from './post.service';
import { Connection } from 'typeorm';

@Module({
  imports: [


    TypeOrmModule.forFeature([PostEntity])],
  providers: [PostService],

  exports: [TypeOrmModule],

  controllers: [PostController]
})
export class PostModule {
  constructor(connection:Connection) {
  }
}
