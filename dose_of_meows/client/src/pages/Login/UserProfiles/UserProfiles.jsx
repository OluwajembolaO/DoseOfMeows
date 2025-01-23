import React, { useState } from 'react';
import Navigation from '../../../Components/Navigation/Navigation';
import './UserProfiles.css';



const UserProfilles = () =>  { 

 
   /* in profileinformation profile secction we will add {username} + profile*/
     return  (   
   <div className = 'Homebody'> 
     <Navigation/> 

     <div className = 'profileinformation'> 
     <h1 className='User'>Nobi's Profile</h1> 
       
     </div>
    
    
   </div>
  

    )  };


export default UserProfilles;