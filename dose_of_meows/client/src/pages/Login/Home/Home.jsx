import React, { useState } from 'react';
import Navigation from '../../../Components/Navigation/Navigation';
import './Home.css';


/* remove the caption on the captionbox div is just a placeholder */

const Home = () =>  { 
const [isModalActive, setModalActive] = useState(false);

return (
   <div className='Homebody'>
     <title>Home</title>
     <Navigation />

     <div className='post-container'>
       <div className='leftbutton' role='button'>
         <span className='arrow'>&larr;</span>
       </div>
       <div className='rightbutton' role='button'>
         <span className='arrow'>&rarr;</span>
       </div>
       <div className='captionbox'>
         <h1 className='test'>caption</h1>
       </div>
     </div>

     <div className='userbox'>
       <h1 className='Users'>Users</h1>
     </div>

     {/* POST Button */}
     <div
       className='PostButton'
       role='button'
       onClick={() => setModalActive(true)}
     >
       <h1 className='posttext'>POST</h1>
       <div className='pluscircle'>
         <h1 className='PLUS'>+</h1>
       </div>
     </div>

     {/* Modal for Uploading Caption and Picture */}
     <div className={`modal ${isModalActive ? 'is-active' : ''}`}>
       <div className='modal-background' onClick={() => setModalActive(false)}></div>

       <div className='modal-content'>
         <div className='box'>
           <h2 className='title'>Upload a Caption</h2>
           <textarea className='textarea' placeholder='Write your caption here...'></textarea>

           <h2 className='title mt-4'>Upload a Picture</h2>
           <input type='file' className='input' />

           <button className='button is-primary mt-4'>Submit</button>
         </div>
       </div>

       <button
         className='modal-close is-large'
         aria-label='close'
         onClick={() => setModalActive(false)}
       ></button>
     </div>
   </div>
 );
};


export default Home; 