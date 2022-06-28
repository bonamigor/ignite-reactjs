import * as prismic from '@prismicio/client'

// Fill in your repository name
export const repositoryName = 'https://ignewsbonamigo.prismic.io/api/v2'

export const client = prismic.createClient(repositoryName, {
  // If your repository is private, add an access token
  accessToken: 'MC5Zck4yR0JNQUFDY0FEVjhz.77-977-977-977-9Q1tB77-9aTVL77-9V3Tvv73vv73vv71Yf--_ve-_vWsII--_ve-_vVRgcxnvv70h',

  // This defines how you will structure URL paths in your project.
  // Update the types to match the Custom Types in your project, and edit
  // the paths to match the routing in your project.
  //
  // If you are not using a router in your project, you can change this
  // to an empty array or remove the option entirely.
})