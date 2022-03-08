import React from 'react'
import Contact from './Contact'
import avatar from '../avatar.png'



function Contactslist({users}) {

    console.log(users);


    return (
        <div className='Contactslist'>
            <div className="title">
                <h1><span className='title-count'>{users && users.length}</span> - Contacts in Your List</h1>
            </div>
            <div className="contactArrays">
                    {users && users.map((user, index) => (
                    <Contact
                        key={index}
                        name={user.name}
                        phone={user.phone}
                        image={user.image ? user.image : avatar}
                    />
                    ))}
         </div>
        </div>
    )
}

export default Contactslist
