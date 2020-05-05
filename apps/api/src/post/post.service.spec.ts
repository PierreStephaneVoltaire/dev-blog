import { Test, TestingModule } from '@nestjs/testing';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostEntity } from './post.entity';

describe('PostService', () => {
  let service: PostService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [    TypeOrmModule.forRoot({
        type: 'mysql',
        host: process.env.db_host,
        port: 3306,
        username: process.env.db_username,
        password: process.env.db_password,
        database: process.env.db_database,
        entities: [PostEntity],
        synchronize: true
      }),TypeOrmModule.forFeature([PostEntity])],
      providers: [PostService],

      exports: [TypeOrmModule],

      controllers: [PostController]

    }).compile();

    service = module.get<PostService>(PostService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
