import { Module } from '@nestjs/common';

import { PostController } from './post/post.controller';
import { PostService } from './post/post.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostEntity } from './post/post.entity';
import { PostModule } from './post/post.module';

@Module({
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
    }),

    PostModule


  ],
  controllers: [PostController],
  providers: [PostService]
})
export class AppModule {
  // constructor(private connection: Connection) {}


}
