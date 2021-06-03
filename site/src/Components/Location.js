import React from 'react'

import './Location.css';



function Location() {
    return (
        <div className="location">
            <div className="text">
                <h2><u>Location</u></h2>
                <h2><u>Our Office</u></h2>
                <p>Murang'a Christian Union Office is located at the university Assembly<br/>
                    hall Building. First Floor, Room No 2.
                </p>
                <p>Our services are held at the Ecop hall <span> Tuition Block </span>  
                or in the <span>Assembly hall</span></p>
                <button className="btn">Contact Us</button>

            </div>
            
            <iframe className="iframem" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.507087037847!2d37.145254814274814!3d-0.7156602994778979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18289873299b19ed%3A0x97675389aba81506!2sMURANG&#39;A%20UNIVERSITY%20OF%20TECHNOLOGY!5e0!3m2!1sen!2ske!4v1622641150243!5m2!1sen!2ske" 
            ></iframe>

            
            
        </div>
    )
}

export default Location
