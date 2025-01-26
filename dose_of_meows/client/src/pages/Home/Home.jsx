import React, { useState, useContext } from 'react';
import Navigation from '../../Components/Navigation/Navigation';
import './Home.css';
import { UserContext } from '../../contexts/userContext';
import { addPost } from '../../Components/FireBase/FireBaseConfig';

/* remove the caption on the captionbox div is just a placeholder */

const Home = () =>  { 

  // State for the caption and image
  const [caption, setCaption] = useState('');
  const [image, setImage] = useState(null);
  // Handle changes in the caption input
  const handleCaptionChange = (event) => {
    setCaption(event.target.value);
  };
  // Handle image file selection
  const handleImageChange = (event) => {
    const file = event.target.files[0];  // Get the first selected file
    if (file) {
      setImage(file);  // Set image file to state
    }
  };


  // Handle submit logic (e.g., upload caption and image)
  const handleSubmit = () => {
    if (!caption || !image) {
      alert('Please provide both a caption and an image.');
      return;
    }

    console.log('Caption:', caption);
    console.log('Image:', image);

    // You can now send the caption and image to your backend or Firebase
    // For example: Upload image to Firebase Storage, save caption to Firestore
  };


  const plsWork = () => {
    alert('This is a placeholder function. Please implement the functionality for posting.');
    addPost(
      currentUser.id,
      "https://fastly.picsum.photos/id/290/200/300.jpg?hmac=kjRyFwJ6i5kuROjzxcs6QbXbBr8EptbH5AuVxtMxhQ0",
      "Testing Testing"
    );
    // Implement the functionality for posting the caption and picture here

  }
const {currentUser} = useContext(UserContext)
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
          <textarea className='textarea' placeholder='Write your caption here...' onChange={handleCaptionChange}></textarea>

           <h2 className='title mt-4'>Upload a Picture</h2>
          <input type='file' className='input' onChange={handleImageChange} />

           <button className='button is-primary mt-4' onClick={handleSubmit}>Submit</button>
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