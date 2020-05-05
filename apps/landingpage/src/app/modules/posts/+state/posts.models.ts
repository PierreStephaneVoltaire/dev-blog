/**
 * Interface for the 'Posts' data
 */
export interface PostsEntity {
  id: string | number
  PostTitle: string
  PostSubTitle: string
  PostThumbNailImage: string
  CreatedDate: Date | string
  UpdateDate: Date | string
  DRAFT: boolean
  PostContent: string
  Meta: null | any

}
