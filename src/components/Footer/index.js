import React from "react";
import footer from "./footer.module.css";
import logo from "./logo-footer.png";
import twitter from './twitter.svg';
import facebook from './facebook.svg';
import instagram from './instagram.svg';

const Footer = () => {
  return (
    <>
      <div className={footer.container}>
        <div className={`${footer.sec} ${footer.aboutus}`}>
          <a href="#" className={footer.a}>
            <img
              src={logo}
              className={`${footer.logo} ${footer.a}`}
              alt="logo"
            />
          </a>
          <p className={footer.p}>
            Ladidapp is a design studio founded in London and expanded our
            services, and offering solutions Worldwide.
          </p>
          <ul className={`${footer.sci} ${footer.ul}`}>
            <li className={footer.li}>
              <a href="#" className={footer.a}>
                <img src={twitter} alt='Twitter' className={footer.fa}/>
              </a>
            </li>
            <li className={footer.li}>
              <a href="#" className={footer.a}>
                < img src={facebook} alt='Facebook'className={footer.fa}/>
              </a>
            </li>
            <li className={footer.li}>
              <a href="#" className={footer.a}>
                < img src={instagram} alt='Instagram'className={footer.fa}/>
              </a>
            </li>
          </ul>
        </div>
        <div className={`${footer.sec} ${footer.quickLinks}`}>
          <h2 className={footer.h2}>Important Links</h2>
          <ul className={footer.ul}>
            <li className={footer.li}>
              <span className={footer.span}>-</span>
              <a href="#" className={footer.a}>
                About Us
              </a>
            </li>
            <li className={footer.li}>
              <span className={footer.span}>-</span>
              <a href="#" className={footer.a}>
                Compare Services
              </a>
            </li>
            <li className={footer.li}>
              <span className={footer.span}>-</span>
              <a href="#" className={footer.a}>
                Our Mission
              </a>
            </li>
            <li className={footer.li}>
              <span className={footer.span}>-</span>
              <a href="#" className={footer.a}>
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div className={`${footer.sec} ${footer.quickLinks}`}>
          <h2 className={footer.h2}>Learning Lessons</h2>
          <ul className={footer.ul}>
            <li className={footer.li}>
              <span className={footer.span}>-</span>
              <a href="#" className={footer.a}>
                Tutorials
              </a>
            </li>
            <li className={footer.li}>
              <span className={footer.span}>-</span>
              <a href="#" className={footer.a}>
                Compare Services
              </a>
            </li>
            <li className={footer.li}>
              <span className={footer.span}>-</span>
              <a href="#" className={footer.a}>
                How It Works
              </a>
            </li>
            <li className={footer.li}>
              <span className={footer.span}>-</span>
              <a href="#" className={footer.a}>
                F.A.Q
              </a>
            </li>
          </ul>
        </div>
        <div className={`${footer.sec} ${footer.quickLinks}`}>
          <h2 className={footer.h2}>Our Policy</h2>
          <ul className={footer.ul}>
            <li className={footer.li}>
              <span className={footer.span}>-</span>
              <a href="#" className={footer.a}>
                Application Security
              </a>
            </li>
            <li className={footer.li}>
              <span className={footer.span}>-</span>
              <a href="#" className={footer.a}>
                Software Principles
              </a>
            </li>
            <li className={footer.li}>
              <span className={footer.span}>-</span>
              <a href="#" className={footer.a}>
                Responsible Supply
              </a>
            </li>
            <li className={footer.li}>
              <span className={footer.span}>-</span>
              <a href="#" className={footer.a}>
                Software Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={footer.copyrightText}>
        <hr className={footer.hr} />
        <p className={footer.p}>2021 © Zytheme.All Rights Reserved.</p>
      </div>
    </>
  );
};
export default Footer;
