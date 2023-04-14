
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import { useState } from 'react';
import BlogPost from './component/BlogPost';
import Filter from './component/Filter';
import { v4 as uuidv4 } from 'uuid';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave, faClose } from '@fortawesome/free-solid-svg-icons'

function App() {

 const savebtn = <FontAwesomeIcon icon={faSave} />  //Font awesome
const closebtn = <FontAwesomeIcon icon={faClose} />

  const [post, setPost] = useState([]);         //state for elements posted
  const [allData, setAllData] = useState([]);   //state for all elements
  const [edittext, setEditText] = useState([])  //state for making some changes on the element

  



  //State for the elements t obe posted 
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [date, setDate] = useState('')
  const [content, setContent] = useState('')


  const getTitle = (event) => {
    const title = event.target.value;
    setTitle(title)
  }

  const getAuthor = (event) => {
    const author = event.target.value;
    setAuthor(author)
  }

  const getDate = (event) => {
    const date = event.target.value;
    setDate(date)
  }

  const getContent = (event) => {
    const content = event.target.value;
    setContent(content)
  }

//Functionality to Add blog post
  const handleSubmit = (event) => {
    event.preventDefault();
    const newPost = {
      id: uuidv4(), 
      title: title,
      author: author,
      date: date,
      content: content,
    }
    setPost([...post, newPost]);    // passing the new submeted element to post state using spread operator
    setAllData([...allData, newPost])  //every element posted, using a spread operator to combine all element. it will also be added to all data state for filtering puroses
   
    // clear form inputs
    setTitle('');
    setAuthor('');
    setDate('');
    setContent('');
   
  }

 
//functionality to cancel edit button
const handleCloseEditField =(id) =>{
 const CancelEdit = edittext.filter((el) => el.id !== id);
 setEditText(CancelEdit)

}

//State for the elements to be edited
const [editTitle, setEditTitle] =useState('')
const [editAuthor, setEditAuthor] =useState('')
const [editDate,  setEditDate] =useState('')
const [editContent,setEditContent] =useState('')


const handleEditTitle =(event) =>{
 const title = event.target.value;
 setEditTitle(title)
}
const handleEditAuthor=(event) =>{
 const author = event.target.value;
 setEditAuthor(author)
}
const handleEditDate =(event) =>{
 const getdate = event.target.value;
 setEditDate(getdate)
}

const handleEditContent =(event) =>{
 const content = event.target.value;
 setEditContent(content)
}


//Save Functionality 
const handleSave =(id) =>{

 const updateData = edittext.find((el) => el.id === id);  // finding the same key Id
  if (updateData) {   // if true
    updateData.title = editTitle; 
    updateData.author = editAuthor;
    updateData.date = editDate;
    updateData.content = editContent;
    setEditText([...edittext, updateData]); // use spread operator pass the edited content back to edit states
  }
  }


const [filtered ,setFiltered] =useState([])

  return (
    <div className="App">
      
     <Header />
                <div className='FormContainer'>
                 <form onSubmit={handleSubmit}>
                      <div className='title-container'>
                          <label>Title</label>
                          <input required value={title} onChange={getTitle}></input>
                          <label>Author</label>
                          <input required value={author} onChange={getAuthor}></input>
                          <label>Date</label>
                          <input  required type="date" value={date} onChange={getDate}></input>
                          <label>Content</label>
                          <textarea required  value={content} onChange={getContent}></textarea>
                          <button type="submit">Submit</button>
                      </div>
                  </form>

                  </div>


               {/* passing the state function and stae value to child components */}

               <Filter  setFiltered={setFiltered} filtered={filtered} post={post} allData={allData} setPost={setPost} setAllData={setAllData}  setEditText={setEditText}/>


               {/* passing the state function and stae value to child components */}

                   <div className='displayBlog'>
                   <BlogPost post={post} allData={allData} setPost={setPost} setAllData={setAllData}  setEditText={setEditText} />         
                   </div>
                   
                   {/* display the edit field by mapping the edittext state */}
                   <div>
                   {edittext.length >0  && (
                      <>
                      {edittext.map(el =>{
                        return (
                        <div key={el.id}>
                          <div className='displayEditField'>
                           
                               <h1>Edit Content</h1>  
                               <div className='inputHolder'>
                                <label>Title</label>
                            
                               <input  required className='editText' Placeholder='Title ' onChange={handleEditTitle}></input>
                               <label>Author</label>
                               <input required className='editText' Placeholder='Author 'onChange={handleEditAuthor}></input>
                               <label>Date</label>
                               <input  required className='editText'  onChange={handleEditDate} type='date'></input>
                               <label>Content</label>
                               <textarea className='areatext'Placeholder='Input some Text...' onChange={handleEditContent}></textarea>
                               </div>
                               <div className='btnHolder'>
                               <button className='savebtn'onClick={()=> handleSave(el.id)}>{savebtn}</button>
                               <button className='closebtn'onClick={()=> handleCloseEditField(el.id)}>{closebtn}</button>
                               </div>
                              
                          </div>
                        </div>
                        )
                      })}
                      </>
                   )}
                   </div>
    
     <Footer />
    </div>
  );
}

export default App;

