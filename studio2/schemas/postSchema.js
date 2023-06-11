export const postSchema = {
    name: 'postImage',
    type: 'document',
    title: 'Post Image',
    fields: [
      {
        name: 'postImage',
        type: 'string',
        title: 'Post Image',
      },
      {
        name: 'timestamp',
        type: 'datetime',
        title: 'Timestamp',
      },
      {
        name: 'author',
        title: 'Author',
        type: 'reference',
        to: [{ type: 'users' }],
      },
    ],
  }