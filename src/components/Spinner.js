import React from 'react'
import loading from './loading.gif.gif';
import "../App.css";
 
const Spinner = () => {
  
    return (
      <div className="text-center">
        <img src={loading} alt="loading"/>
      </div>
    )
  
}
export default Spinner
