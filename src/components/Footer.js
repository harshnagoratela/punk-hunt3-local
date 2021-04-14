import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>

        <p className="copyright">
        🛠️ <a href="https://twitter.com/RantumBits">RantumBits</a> @ <a href="https://ecomloop.com">ecomloop</a>
        <br/>
        Not affiliated with LarvaLabs
        </p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
