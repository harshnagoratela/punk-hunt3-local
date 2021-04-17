import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import Footer from '../components/Footer'
import { TwitterTweetEmbed } from "react-twitter-embed";

const TweetPage = ({ data, location }) => {

  const allTweets = (data.allTwitterSearchTweetsRecentpunkhunts && data.allTwitterSearchTweetsRecentpunkhunts.edges) || []

  const pageSize = 10;
  const [currentLot, setCurrentLot] = React.useState(pageSize)

  const loadMore = () => {
    setCurrentLot(currentLot + pageSize);
  }

  return (
    <Layout location={location}>

      <h1
        style={{
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: '600',
          color: '#ff04b4',
          fontSize: '1.8em',
        }}
      >
        #PunkHunt Twitter Posts
    </h1>
      <div
        style={{
          fontFamily: 'Fira Mono, monospace',
          fontWeight: '100',
          fontSize: 'small',
          letterSpacing: '1px',
          textAlign: 'center',
        }}
      >
        <p>See recent #PunkHunt posts featuring CryptoPunks on billboards</p>
        <p>Enter to win 0.5 ETH by sharing <a href="https://twitter.com/hashtag/PunkHunt?src=hashtag_click" target="_blank">PunkHunt selfies on twitter</a></p>
      </div>
      <ul>
        <a href="/">
          <button

            style={{
              fontFamily: 'Fira Mono, monospace',
              fontWeight: '200',
            }}
          >



            PunkHunt Details
            </button>


        </a>
      </ul>
      <div class="loading"
        style={{
          fontFamily: 'Fira Mono, monospace',
          fontWeight: '100',
          fontSize: 'small',
          letterSpacing: '1px',
          textAlign: 'center',
          height: '50px',
        }}>

        <img src="https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" />

      </div>
      {allTweets.slice(0, currentLot).map(({ node }) => {
        return (
          <TwitterTweetEmbed tweetId={node.id_str} />
        );
      })}
      <ul><button
        style={{
          fontFamily: 'Fira Mono, monospace',
          fontWeight: '200',
        }}
        onClick={loadMore}
      >
        Load More...
      </button>
      </ul>
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
