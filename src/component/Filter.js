import React, { useState } from 'react'
import './Filter.css';

const Filter = ({   setPost,  filtered={filtered}, setFiltered={setFiltered},  allData}) => {

const [erroMessage, setErrormesasge] =useState('')
        
        
const handleStatusChange = (event) => {
  const getValue = event.target.value;


  if (allData.length > 0) {
    const result = allData.filter((el) => {
      // Check if the date matches the selected value
   
      return el.date === getValue;
      
    });

    setFiltered(result);

    if (result.length === 0) {
       setFiltered([]);
       setErrormesasge('No Blog Found');
    } else {
      setErrormesasge('');
      setPost([])
    }
  } else {
    setErrormesasge('No Blog Posted ');
  }
};


     
 
  return (
<>
    <div className='containerSelect'>
        <select className='container' onChange={handleStatusChange}>
          
           <option value={'FilteredDate'}>Filtered By Date</option>
           <option value='2023-04-01'>2023-04-01</option>
           <option value='2023-04-02'>2023-04-02</option>
            <option value='2023-04-03'>2023-04-03</option>
            <option value='2023-04-04'>2023-04-04</option>
            <option value='2023-04-05'>2023-04-05</option>
             <option value='2023-04-06'>2023-04-06</option>
        </select>  
    </div>



    < div className='DisplayResult'>
     
         <h1>{erroMessage}</h1>
    
       <div >
   
      <>
      {filtered.map(el =>{
           <h1>LIST OF BLOGS FILTERED BY DATE</h1>
        return (  
          <div  key={el.id}>   
          <div className="containerFilter">         
              <div className='displayfilter'>
              <h1>{el.title}</h1>
              <div className='autorAndDate'>
                  <p>{el.author}</p>
                  <p>{el.date}</p>
               </div>
               <p className='contentdisplay'>{el.content}</p>
               </div>
            </div> 
          </div>    
        )
      })}
      </>

   </div>
    </div>

    

   </> 
  )
}

export default Filter