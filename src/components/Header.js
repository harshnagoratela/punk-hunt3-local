import PropTypes from 'prop-types'
import React from 'react'
import JSONData from '../content/mycontent.json'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>

    <div className="content backdrop-blur">
      <div className="inner backdrop-blur">
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

        <p>
          {JSONData.Description.map(item => {
            return (
              <div
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: '600',
                  color: '#ff04b4',

                  width: 'fit-content',
                  margin: '1em auto',

                  'font-size': '1.2em',
                  padding: '0.4em',
                  'text-transform': 'uppercase',
                }}
              >
                {item}
              </div>


            )
          })}
        </p>
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
    <h1
      style={{
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: '600',
        color: '#ff04b4',
        fontSize: '1.8em',
      }}
    >
      Punk Hunt
    </h1>
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
            <p>Find them and win 0.5 ETH</p>
          </div>
        )
      })}
    </p>

      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
            style={{
              fontFamily: 'Fira Mono, monospace',
              fontWeight: '200',
            }}
          >

            Challenge Details
          </button>
        </li>


        </ul>

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
