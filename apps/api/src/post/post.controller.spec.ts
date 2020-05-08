import { Test, TestingModule } from '@nestjs/testing';
import { PostController } from './post.controller';
import { PostsService } from '../../../landingpage/src/app/modules/posts/posts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostEntity } from './post.entity';
import { PostService } from './post.service';

describe('Post Controller', () => {
  let controller: PostController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'mysql',
          host: process.env.db_host,
          port: 3306,
          username: process.env.db_username,
          password: process.env.db_password,
          database: process.env.db_database,
          entities: [PostEntity],
          synchronize: true
        })
        ,TypeOrmModule.forFeature([PostEntity])],
      providers: [PostService],

      exports: [TypeOrmModule],

      controllers: [PostController]
    }).compile();

    controller = module.get<PostController>(PostController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
