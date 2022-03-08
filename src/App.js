import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Contactslist from './components/Contactslist';
import Sidebar from './components/Sidebar';

/* 

Here we have a contacts app! The basic front end is built for you! Your job is to create the functionality and dynamically create 5 DIFFERENT CONTACTS using props.

TODO: Create an array of objects that contain the necessary properties you need to pass down to the Contact

Hint: Create the array and pass the props here then take the props you need from the object in the Contact.jsx
*/
// const contactArray = [
//    {
//       image: 'https://economictimes.indiatimes.com/thumb/msid-84588036,width-1200,height-900,resizemode-4,imgsize-109325/elon-musk.jpg?from=mdr',
//       name: 'Elon Musk',
//       phone: '1-888-518-3752',
//    },
//    {
//       image: 'https://imageio.forbes.com/specials-images/imageserve/5c76b7d331358e35dd2773a9/0x0.jpg?format=jpg&crop=4401,4401,x0,y0,safe&fit=crop',
//       name: 'Mark Zuckerburg',
//       phone: '975-223-4878',
//    },
//    {
//       image: 'https://www.apple.com/leadership/images/bio/tim-cook_image.png.large.png',
//       name: 'Tim Cook',
//       phone: '231-585-3341',
//    },
// ];

function App() {

   const [users, setUsers] = useState()

   const getUsers = async () => {
      const promise = await axios.get('https://jsonplaceholder.typicode.com/users')
      setUsers(promise.data)
   }
  
   useEffect(() => {
      getUsers(); 
   },[])

   return (
      <div className="App">
         <Sidebar />
         <Contactslist users={users} />
      </div>
   );
}

export default App;
