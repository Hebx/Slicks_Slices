import dotenv from 'dotenv';

dotenv.config({path: '.env'});

export default {
  siteMetadata: {
    title: `Slicks Slices`,
    description: 'Pizza Store',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: '95ecwwa9',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
