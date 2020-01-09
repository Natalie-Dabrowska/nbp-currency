import React from "react";
import "./style.css"; 

const Checkbox = ({ checked, onClick }) => {
  return (
      <div>
      
<label class="container">Ulubione waluty
  <input type="checkbox" checked={checked} onClick={onClick} />
  <span class="checkmark"></span>
</label>
    
      </div>
  );  
};


export default Checkbox;