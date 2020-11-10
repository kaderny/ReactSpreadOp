import React, { useState } from "react";

function App() {


const [itemValue , setItemValue]=useState("");
const [itemsArray , setItems]=useState([]);

function handleClick(){
  setItems ((preValues)=>{
    return [...itemsArray, itemValue ];
  });

}

function handleChange (event){
const newItemValue= event.target.value;
setItemValue(newItemValue);
}

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={itemValue} />
        <button onClick = {handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
      
        <ul>
        {itemsArray.map(todoItem => <li> {todoItem}</li> )}
          
        </ul>
        
      </div>
    </div>
  );
}

export default App;
