import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: '63dzouc4',
  dataset: 'production',
  apiVersion: '2022-03-10',
  useCdn: false,  //fetch new videos we reload, so to get instantly
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
