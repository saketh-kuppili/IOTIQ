import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/Cream Logo.svg';
import './Footer.css';

const Footer = () => {
    return (
      <footer>
        <div className="container">
          <div className="footer-columns">
            <div className="col-1">
              <img src={logo} className="logo" alt="IOTIQ" />
              <div className="text">
                We saw a dream of making everyday life more easy, comfortable and secure and we found the solution in the form of “IOTIQ- India’s first Home Intelligence system.”
              </div>
            </div>
            <div className="col">
              <h5>Quick Links</h5>
              <ul className="footer-nav">
                <li>
                  <a href="../about.html">
                    <i className="fa fa-angle-right"></i>
                    <span>About Us</span>
                  </a>
                </li>
                <li>
                  <a href="../products.html">
                    <i className="fa fa-angle-right"></i>
                    <span>Products</span>
                  </a>
                </li>
                <li>
                  <a href="../features.html">
                    <i className="fa fa-angle-right"></i>
                    <span>Features</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col">
              <h5>Help</h5>
              <ul className="footer-nav">
                <li>
                  <a href="../privacypolicy.html">
                    <i className="fa fa-angle-right"></i>
                    <span>Privacy Policy</span>
                  </a>
                </li>
                <li>
                  <a href="../terms.html">
                    <i className="fa fa-angle-right"></i>
                    <span>Terms of Service</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col">
              <h5>Contact Us</h5>
              <div className="address">
                <p>
                  Pardha's Picasa, Level 7,
                  <br /> Durgam Cheruvu Road, Madhapur
                  Hyderabad - 500 081, Telangana, INDIA</p>
                <p>
                  Phone:{" "}
                  <a href="tel:+91-8984684689">+91 - 89 846 846 89</a>
                </p>
                <p>
                  <span>E-Mail: </span>
                  <a href="mailto:sales@iotiq.co.in">sales@iotiq.co.in</a>
                </p>
                <ul className="social">
                  <li>
                    <a href="https://facebook.com">
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                  </li>
                  <li>
                    <a href="https://instagram.com">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com">
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <p className="copyright">
                © 2020 <a href="https://iotiq.co.in">IOTIQ </a>A Group Company of{" "}
                <a href="https://acstechnologies.co.in/">ACS Technologies Ltd.</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  };

export default Footer;
