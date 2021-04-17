require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: 'PunkHunt | Find them All',
    author: '@RantumBits',
    description: 'Complete all the PunkHunt challenges during the Miami billboard takeover',
    image: 'src/images/punkhunt_billboard.png',
    siteUrl: 'https://PunkHunt.com'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'PunkHunt | Find them all',
        short_name: 'punkhunt',
        start_url: '/',
        background_color: '#fff',
        
        theme_color: '#ff04b4',
        display: 'minimal-ui',
        icon: 'src/images/rocket.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-twitter`,
      options: {
        credentials: {
          bearer_token: process.env.TWITTER_BEARER_TOKEN,
        },
        queries: {
          recentpunkhunts: {
            endpoint: "search/tweets",
            params: {
              q: "#punkhunt",
              tweet_mode: "extended",
            },
          },
        },
      },
    },
  ],
}
