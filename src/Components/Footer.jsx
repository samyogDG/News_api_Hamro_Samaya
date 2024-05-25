import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <h3>About Us</h3>
                        <p>Hamro Samaya is a company truly greater than the sum of its parts.
                             Driven by passion, guided by principles and acting with purpose, 
                             we are dedicated to delivering value to our customers and our shareholders with premium services that inform and inspire.</p>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6">
                        <h3>Follow Us</h3>
                        <ul className="social-icons">
                            <li><a href="#"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
          
            <div className="additional-content">
            <p>© {new Date().getFullYear()} <a href="https://www.Hamrosamaya.com">www.hamrosamaya.com</a>    <a href="#">Privacy Policy</a></p>
            </div>
        </footer>
    );
}

export default Footer;
