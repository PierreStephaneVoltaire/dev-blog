import { Test, TestingModule } from '@nestjs/testing';
import { PostController } from './post.controller';
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
          host: "localhost",
          port: 3306,
          username:'dev',
          password: 'mysql',
          database: 'test',
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
