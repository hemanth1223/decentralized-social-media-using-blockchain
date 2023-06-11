// import {createClient} from '@sanity/client'

// const client = createClient({
//   projectId:'bogpqmqd',
//   dataset: 'production',
//   apiVersion: '2023-03-25',
//   useCdn: false,
//   token:'sk45vGh9ziqPScMiqU3KOM3FFLafM6piDMYGn8hZdoFLTLH5ttsNymYDzb8VQzd2ZqGf8fN1H03cW4i8isDRMrTW89eHB718LtbufEWkxZ7yJOaB0RlNEveV1iI9f36OmVbMnMYDAC4zzAFBIeQjGK2wZ3bx68luKUvm1gU6wFfYOLABeDyh',
// }
// )

import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2023-03-25',
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  useCdn: false,
})