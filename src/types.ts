export interface Post {
  id: string
  title: string
  slug: null
  content: string
  excerpt: string
  featuredImage: string
  status: 'DRAFT' | 'PUBLISHED'
  category: string
  tags: string
  viewCount: number
  publishedAt: string
  isDefault: boolean
  author: string | null
  createdAt: string
  updatedAt: string
}
