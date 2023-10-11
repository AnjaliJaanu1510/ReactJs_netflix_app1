import React from 'react';
import ReactDOM from 'react-dom/client';
import Cards from './Cards';
import './index.css';
import sData from './sData';

function ncard(val){
  

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
<h1 className='heading_style'>List of top 6 Movies 2023</h1>

   {sData.map((val)=>{
    return(
<Cards
   imgsrc = {val.imgsrc} 
   title = {val.title} 
   sname = {val.sname} 
   link = {val.link} />
)
   })}
  </>
  
   
)
 
