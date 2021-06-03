import React from 'react'
import './Events.css'
function Events() {
    //create an array of arrays called person
    const People = [
        {id: 1,  name: "Murang'a Bible Broadcasting Coporation. Our Weekly meetings on Thursday"  ,image: "/images/mbbc.jpg" },
        {id: 2, name: "Years Fellowships held every Tuesday at the the tuition block  " ,image: "/images/years.jpg" },
        {id: 3, name:" The handing over on the 2020 AGM" ,image: "/images/ANDOVER.JPG" },
        {id: 4, name: "Praise and Worship practice sessions at the F 2.2" ,image: "/images/pw.jpg" },
        {id: 5, name: "Sunday service at the Ecop",image: "/images/sunday.JPG" },
        {id: 6, name: "MUTCU Associates present in the 2020 AGM (Associates Sunday)" , image: "/images/allumin.JPG" }
    ]
     /* using the mapping function display the above array
     const PeopleList = 
         map method accepts function as parameters*/
         
     
    return (
        <div className="people">
            <h1>My past and current events</h1>
         
         <div className="hold">
         { People.map(People => 
        <div className="head">
            <img className="imgtag" src={People.image}/>
            <h3>  { People.name}  </h3>
            
        </div>
         )}
         </div>
            
        </div>
    )
}

export default Events
