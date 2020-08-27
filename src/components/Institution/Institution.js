import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import courseInfo from '../../fakeData/data';
import Course from '../Course/Course';
import './Instituton.css';



const Institution = () => {
   const [card,setCard]=useState([]);
   const handleAddClick=(courseValue)=>{
     const newCard=[...card,courseValue];
      setCard(newCard);
   }
    return (
       
    <div className="container">

          <div className="course-info">
            {
               courseInfo.map(singlaData=> <Course dataInfo={singlaData} handleAddClick={handleAddClick} key={singlaData.code}> </Course>)
              }
          </div>

           <div className="card-info">
               <Cart cart={card}></Cart>
            </div>

    </div>

    );
};

export default Institution;