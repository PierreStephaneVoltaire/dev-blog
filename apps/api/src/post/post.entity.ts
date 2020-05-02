import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('posts')
export class PostEntity {
  @PrimaryGeneratedColumn()
  PostID: number;
  @Column()
  PostTitle: string;
  @Column()
  PostSubTitle: string;
  @Column({ default: null })
  PostThumbNailImage: string;
  @Column()
  CreatedDate: Date;
  @Column()
  UpdateDate: Date;
  @Column({ default: true })
  DRAFT: boolean;
  @Column()
  PostContent: string;  @Column()
  @Column({ type:"json" })
  Meta: any;

}
