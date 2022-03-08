import React from 'react'

// TODO: Pass down props as a parameter and take the parts of object you pass down to dyanmically create a unique contact for each component

function Contact({ image, name, phone, icon}) {
    return (
        <div className='contactContainer'>
            <div className="container__icon">{icon}</div>
            <div className="imageContainer">
                <img src={image} alt="profile pic"
                    style={{width: '80px', height: '80px'}}
                ></img>
            </div>
            
            <div className="contactInfo">
                <h2>{name}</h2>
                <h2>{phone}</h2>
            </div>
        </div>
    )
}

export default Contact
