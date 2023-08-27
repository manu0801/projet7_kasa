import "../footer/Footer.css";
import React from 'react';
import logo from '../../assets/images/logo/LOGO footer.svg';

const Footer =()=> {
    return (
        <footer className="footer">
            <img src= {logo} alt='' className="footer_logo"/>
            <p className="footer-text">
            © 2020 kasa. All rights reserved
            </p>
        </footer>
    );
}

export default Footer;