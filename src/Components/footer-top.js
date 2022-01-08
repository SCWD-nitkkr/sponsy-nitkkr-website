import React from 'react'
import footer from './footer.module.css';
import logo from './logo-footer.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF,faTwitter,faInstagram } from '@fortawesome/free-brands-svg-icons'
const Footertop = () => {
    return(
        <>
                <div className={footer.container}>
                    <div className={footer.sec,footer.aboutus}>
                        <a href="#"><img src={logo} className={footer.logo} alt ="logo"/></a>
                        <p>Ladidapp is a design studio founded in London and expanded our
                            services, and offering solutions Worldwide.</p>
                        <ul className={footer.sci}>
                            <li><a href="#" className={footer.fa}><FontAwesomeIcon icon={faTwitter} /></a></li>
                            <li><a href="#" className={footer.fa}><FontAwesomeIcon icon={faFacebookF} /></a></li>
                            <li><a href="#" className={footer.fa}><FontAwesomeIcon icon={faInstagram} /></a></li>
                        </ul>
                    </div>
                    <div className={footer.sec,footer.quickLinks}>
                        <h2>Important Links</h2>
                        <ul>
                            <li><span>-</span><a href="#">About Us</a></li>
                            <li><span>-</span><a href="#">Compare Services</a></li>
                            <li><span>-</span><a href="#">Our Mission</a></li>
                            <li><span>-</span><a href="#">Blog</a></li>
                        </ul>
                    </div>
                    <div class={footer.sec,footer.quickLinks}>
                        <h2>Learning Lessons</h2>
                        <ul>
                            <li><span>-</span><a href="#">Tutorials</a></li>
                            <li><span>-</span><a href="#">Compare Services</a></li>
                            <li><span>-</span><a href="#">How It Works</a></li>
                            <li><span>-</span><a href="#">F.A.Q</a></li>
                        </ul>
                    </div>
                    <div className={footer.sec,footer.quickLinks}>
                        <h2>Our Policy</h2>
                        <ul>
                            <li><span>-</span><a href="#">Application Security</a></li>
                            <li><span>-</span><a href="#">Software Principles</a></li>
                            <li><span>-</span><a href="#">Responsible Supply</a></li>
                            <li><span>-</span><a href="#">Software Policy</a></li>
                        </ul>
                    </div>
                </div>
                <div className={footer.copyrightText}>
                    <hr/>
                    <p>2021 © Zytheme.All Rights Reserved.</p>
                </div>
        </>
    )
}
export default Footertop