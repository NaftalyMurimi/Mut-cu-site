import React from 'react'

import './Location.css';



function Location() {
    return (
        <div className="location">
            <div className="text">
                <h2><u>Location</u></h2>
                <h2>Our Office</h2>
                <p>Murang'a Christian Union Office is located at the university Assembly<br/>
                    hall Building. First Floor, Room No 2.
                </p>
                <button>Contact Us</button>

            </div>
            <div className="image">
                <img src="./images/see.PNG" alt="my location image"/>

            </div>
            
        </div>
    )
}

export default Location
