import { type SchemaTypeDefinition } from 'sanity'
import category from './category'
import blogPost from './blog'
import author from './author'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [category,blogPost,author],
}
