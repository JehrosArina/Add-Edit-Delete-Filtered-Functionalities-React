import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashCan } from '@fortawesome/free-solid-svg-icons'

import React from 'react'
import './BlogPost.css';

const BlogPost = ({ post, allData, setPost, setAllData, setEditText }) => {
    
const editbtn = <FontAwesomeIcon icon={faEdit} />
const deletebtn = <FontAwesomeIcon icon={faTrashCan} />


  const handleDelete = (id) => {
  const updatedPost = post.filter((el) => el.id !== id);    //This portion, I passed the post state value not a function so I can manipulate the current state post value.
  setPost(updatedPost); // at this time, I passed the filtered value to the setpost function in order to update the post state value in app component since I was passing both the post value and the setPost function.
  const updatedData = allData.filter((el) => el.id !== id); // updae also to my all data state once the deleted an element
  setAllData(updatedData);

};


//When Edit button Click, if Id matches, pass the filtered element to setEditText function in a props
const hadleEdit =(id) =>{
const updateElement = post.filter((el) => el.id === id);  
setEditText(updateElement)            
// console.log('Before Changes')
// console.log(updateElement)
}

  return (
    
       <div className='container'>
          
                    {post.map(el => (
                    <div className='DisplayChildElement' id='close' key={el.id}>
                      <h1>{el.title}</h1>
                      <div className='authorAndDate'>
                          <p> {el.author}</p>
                          <p>{el.date}</p>
                      </div>
                        <div className='contentText'>
                          <p>{el.content}</p>
                      </div>
                      <div className='delAndedit'>
                         <button className='delbtn' onClick={()=> handleDelete(el.id)}>{deletebtn}</button>
                        
                         <button className='editbtn' onClick={()=> hadleEdit(el.id)}>{editbtn}</button>
                       </div>
                    </div>
                ))}
              
       </div>
    
  )
}

export default BlogPost