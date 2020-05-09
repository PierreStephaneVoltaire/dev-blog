import { Test, TestingModule } from '@nestjs/testing';
import { PostService } from './post.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostEntity } from './post.entity';

describe('PostService', () => {
  let service: PostService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
    imports:[

      TypeOrmModule.forRoot({
      type: 'sqlite',
      database: "../posts.sqlite",
      entities: [PostEntity],
    }),
      TypeOrmModule.forFeature([PostEntity]),

  ]

      ,
      providers: [PostService],
    }).compile();

    service = module.get<PostService>(PostService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
