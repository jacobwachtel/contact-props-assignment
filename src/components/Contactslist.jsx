import React from 'react'
import Contact from './Contact'



function Contactslist({contactArray}) {

    


    return (
        <div className='Contactslist'>
            <div className="title">
                <h1>Contacts</h1>
            </div>
            <div className="contactArrays">
                {contactArray.map((contact, index) => (
                <Contact
                    key={index}
                    image={contact.image}
                    name={contact.name}
                    phone={contact.phone}
                    icon={contact.icon}
                />
                ))}
         </div>
        </div>
    )
}

export default Contactslist
