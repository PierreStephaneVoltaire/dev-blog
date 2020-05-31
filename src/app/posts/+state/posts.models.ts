/**
 * Interface for the 'Posts' data
 */
export interface PostsEntity {
  id: string | number
  PostID?: string | number
  PostTitle: string
  PostSubTitle: string
author:string
  PostThumbNailImage: string
  CreatedDate: Date | string
  UpdateDate: Date | string
  DRAFT: boolean
  PostContent: string
  Meta: null | any

}
