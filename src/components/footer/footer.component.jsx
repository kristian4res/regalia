import React from 'react';

import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import './footer.styles.scss';


const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <p className="copyright-container">
                    The content of this site is copyright-protected and is the property of Regalia. Regalia's business concept is to offer fashion and quality at the best price in a sustainable way.
                </p>
                <Link className="logo-container" to='/'>
                    <Logo className="logo" title='Regalia' />
                </Link>
            </div>
        </footer>
    )
}

export default Footer;
