import PropTypes from 'prop-types'
import React from 'react'
import JSONData from '../content/mycontent.json'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>

    <div className="content backdrop-blur">
      <div className="inner backdrop-blur">
      <div className="billboard">
        <h2
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: '600',
            color: '#ff04b4',
            border: '1px solid',
            width: 'fit-content',
            margin: '1em auto',
            'border-radius': '4px',
            transform: 'rotate(-5deg)',
            'font-size': '1.6em',
            padding: '0.4em',

          }}
        >
          {JSONData.Name}
        </h2>
        </div>
        <h3
        style={{
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: '600',
          color: '#ff04b4',

          width: 'fit-content',
          margin: '1em auto',

          'font-size': '1em',
          padding: '0.4em',
        }} >HAVE YOU SEEN THESE PUNKS?</h3>


          {JSONData.Description.map(item => {
            return (
              <div
                style={{
                  fontFamily: 'Fira Mono, monospace',
                  fontWeight: '100',
                  fontSize: 'small',
                  letterSpacing: '1px',
                  'margin-bottom': '1em',

                }}
              >
                Find them for a chance to win 0.5 ETH
              </div>
            )
          })}

        <div className="flexbox">
          <div className="punkDetails">
        <div className="logo backdrop-blur">
          <img
            src={JSONData.Punk1}
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              display: 'block',
              borderRadius: '50%',

            }}
          ></img>
        </div>
        <p>
          {JSONData.Description.map(item => {
            return (
              <div
                style={{
                  fontFamily: 'Fira Mono, monospace',
                  fontWeight: '100',
                  fontSize: 'small',
                  letterSpacing: '1px',
                }}
              >
                #1629<br/>
                <a href="https://twitter.com/ClaireSilver12" target="_blank">@ClaireSilver12</a>
              </div>
            )
          })}
        </p>
        </div>

        <div className="punkDetails">
        <div className="logo backdrop-blur">
          <img
            src={JSONData.Punk2}
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              display: 'block',
              borderRadius: '50%',
            }}
          ></img>
        </div>
        <p>
          {JSONData.Description.map(item => {
            return (
              <div
                style={{
                  fontFamily: 'Fira Mono, monospace',
                  fontWeight: '100',
                  fontSize: 'small',
                  letterSpacing: '1px',
                }}
              >
              #2460<br/>
              <a href="https://twitter.com/niftynaut" target="_blank">@niftynaut</a>
              </div>
            )
          })}
        </p>
        </div>
</div>

<div className="flexbox">
        <div className="punkDetails">
        <div className="logo backdrop-blur">
          <img
            src={JSONData.Punk3}
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              display: 'block',
              borderRadius: '50%',
            }}
          ></img>
        </div>
        <p>
          {JSONData.Description.map(item => {
            return (
              <div
                style={{
                  fontFamily: 'Fira Mono, monospace',
                  fontWeight: '100',
                  fontSize: 'small',
                  letterSpacing: '1px',
                }}
              >
              #8219<br/>
              <a href="https://twitter.com/gmoneyNFT" target="_blank">@gmoneyNFT</a>
              </div>
            )
          })}
        </p>
        </div>
        <div className="punkDetails">
        <div className="logo backdrop-blur">
          <img
            src={JSONData.Punk4}
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              display: 'block',
              borderRadius: '50%',
            }}
          ></img>
        </div>
        <p>
          {JSONData.Description.map(item => {
            return (
              <div
                style={{
                  fontFamily: 'Fira Mono, monospace',
                  fontWeight: '100',
                  fontSize: 'small',
                  letterSpacing: '1px',

                }}
              >
              #8348<br/>
              <a href="https://twitter.com/seedphrase" target="_blank">@seedphrase</a>
              </div>
            )
          })}
        </p>
        </div>
        </div>
      </div>
    </div>



    <nav
      className="backdrop-blur"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
      }}
    >



      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
            style={{
              fontFamily: 'Fira Mono, monospace',
              fontWeight: '200',
              background: '#ff04b4',
              color: 'white',
            }}
          >

            Challenge Details
          </button>
        </li>


        </ul>

        <div
                style={{
                  fontFamily: 'Fira Mono, monospace',
                  fontWeight: '100',
                  fontSize: 'small',
                  letterSpacing: '1px',
                  margin: '1em 0',
                }}
              ><br/>
                <p>See recent <a href="/tweets">#PunkHunt tweets</a></p>

              </div>
        <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>

        <p className="copyright">
        🛠️ <a href="https://twitter.com/RantumBits" target="_blank">RantumBits</a> <a href="https://ecomloop.com" target="_blank"><img src="https://logo.clearbit.com/ecomloop.com" height="14px"/> ecomloop</a>
        <br/>
        Not affiliated with LarvaLabs
        </p>
        </footer>
        <div>

              <div
                style={{
                  fontFamily: 'Fira Mono, monospace',
                  fontWeight: '100',
                  fontSize: 'small',
                  letterSpacing: '1px',
                  'max-width': '600px',
                  'margin-top': '1em',
                }}
              >

              </div>


        </div>
          <br/>


    </nav>





  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
