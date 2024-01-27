import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className="footer">
        <div className="footer__links">
            <ul>
                <li className='bold'><a href="/">Audio Description</a>{" "}</li>
                <li><a href="/">Investor Relations</a></li>
                <li><a href="/">Privacy</a></li>
                <li><a href="/">Contact Us</a></li>
            </ul>
            <ul>
                <li className='bold'><a href="/">Help Center</a></li>
                <li><a href="/">Jobs</a></li>
                <li><a href="/">legal Notice</a></li>
                <li><a href="/">Do Not Sell or Share my Personal <br/> Information</a></li>
            </ul>
            <ul>
                <li className='bold'><a href="/">Gift Cards</a></li>
                <li><a href="/">Netflix Shop</a></li>
                <li><a href="/">Cookie Preferences</a></li>
                <li><a href="/">Ad Choices</a></li>
            </ul>
            <ul>
                <li><a className='bold' href="/">Media Center</a></li>
                <li><a href="/">Terms of Uses</a></li>
                <li><a href="/">Corporate Information</a></li>
            </ul>
        </div>
        <div className='service '>
        <div className='service-link'><a href='/'> Service Code <br/> 1997-2023 Netflix, inc,</a></div>
        </div>
    </div>
  )
}

export default Footer