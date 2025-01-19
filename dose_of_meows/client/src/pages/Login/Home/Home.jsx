import React, { useState } from 'react';
import Navigation from '../../../Components/Navigation/Navigation';
import './Home.css';


/* remove the caption on the captionbox div is just a placeholder */

const Home = () =>  { 



return  ( 
 
 <div className = 'Homebody'>  
    <title> Home </title>
    <Navigation/>

   <div className = 'post-container'> 


   <div className='leftbutton' role='button'>
   <span class="arrow">&larr;</span>
     </div> 
     <div className='rightbutton' role = 'button'>
        <span class='arrow'>&rarr;</span> 
         </div>
    <div className = 'captionbox'> <h1 className='test'>caption</h1>  </div>    

   </div>
   <div> 

   <div className = 'userbox'>   
    <h1 className='Users'>Users</h1>
    
   </div>


    </div>

    <div className='PostButton' role='button'>
    <h1 className='posttext'>POST</h1>
    <div className='pluscircle'>  
      <h1 className='PLUS'>+</h1>
     </div>
    
    </div>

   </div>
   



);




};



export default Home; 