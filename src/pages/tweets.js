import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import Footer from '../components/Footer'
import { TwitterTweetEmbed } from "react-twitter-embed";

const TweetPage = ({ data, location }) => {

  const allTweets = (data.allTwitterSearchTweetsRecentpunkhunts && data.allTwitterSearchTweetsRecentpunkhunts.edges) || []
  return (
    <Layout location={location}>

      <h1>Recent Tweets</h1>
      {allTweets.map(({ node }) => {
        return (
          <TwitterTweetEmbed tweetId={node.id_str} />
        );
      })}
      <Footer />
    </Layout>
  )
}

export default TweetPage

export const query = graphql`
  query TweetPageQuery {
    allTwitterSearchTweetsRecentpunkhunts {
      edges {
        node {
          id_str
          full_text
          user {
            screen_name
            name
            profile_image_url_https
            url
          }
        }
      }
    }
  }
`