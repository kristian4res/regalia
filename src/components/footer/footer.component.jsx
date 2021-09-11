import React from 'react';

import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import './footer.styles.scss';


const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <ul className="social-icon-container">
                    <SocialIcon style={{ width: '2.1em', height: '2.1em'}} bgColor="gray" fgColor="white" label="Github" title="Github" url="https://github.com/Enigma-cloud" target="_blank" />
                    <SocialIcon style={{ width: '2.1em', height: '2.1em'}} bgColor="gray" fgColor="white" label="Instagram" title="Instagram" url="https://www.instagram.com/instagram/?hl=en" target="_blank" />
                    <SocialIcon style={{ width: '2.1em', height: '2.1em'}} bgColor="gray" fgColor="white" label="Twitter" title="Twitter" url="https://twitter.com/Twitter?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank" />
                </ul>
                <p className="copyright-container">
                    The content of this site is copyright-protected and is the property of Regalia. Regalia's business concept is to offer fashion and quality at the best price in a sustainable way.
                </p>
                <Link className="logo-container" to='/'>
                    <Logo className="logo" title='Regalia' />
                </Link>
                <div className="region">United Kingdom | £</div>
            </div>
        </footer>
    )
}

export default Footer;
