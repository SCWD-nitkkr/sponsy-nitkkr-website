import React from 'react'
import './Team.css';
export default function Team(props) {
    return (
        <>
            <div className="teams">
                <p className="team-para">User Review</p>
                <h2 className="team-head">What Our Clients Say</h2>
                <div className="team-img">
                    <div className="team-images" id ="team-id">
                        <img src="https://landing.zytheme.com/ladidapp/assets/images/testimonials/1.png" alt="team-member-image" className= {`team-image team-img1 ${props.property[0]}`} />
                        <img src="https://landing.zytheme.com/ladidapp/assets/images/testimonials/3.png" alt="team-member-image" className={`team-image team-img2 ${props.property[1]}`} />
                        <img src="https://landing.zytheme.com/ladidapp/assets/images/testimonials/2.png" alt="team-member-image" className={` team-image team-img3 ${props.property[2]} `} />
                        <img src="https://landing.zytheme.com/ladidapp/assets/images/testimonials/4.png" alt="team-member-image" className={`team-image team-img4 ${props.property[3]}`} />
                        <img src="https://landing.zytheme.com/ladidapp/assets/images/testimonials/5.png" alt="team-member-image" className={`team-image team-img5 ${props.property[4]}`} />
                        <img src="https://landing.zytheme.com/ladidapp/assets/images/testimonials/6.png" alt="team-member-image" className={`team-image team-img6 ${props.property[5]}`} />
                    </div>
                </div>
            </div> 
        </>
    )
}