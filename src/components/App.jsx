import React, { useState } from "react";
import TodoItem from "./ToDoItem";

function App() {
const [itemValue , setItemValue]=useState("");
const [itemsArray , setItems]=useState([]);

function handleClick(){
setItems ((preValues)=>{
return [...itemsArray, itemValue ];
  });
setItemValue("");
}

function handleChange (event){
const newItemValue= event.target.value;
setItemValue(newItemValue);
}

function deleteItem(id){
  setItems (preValues=>{
    return preValues.filter(
      (item , index)=>{
        return index !==id;
      });

  });
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
        {itemsArray.map((todoItem,index) => 
          <TodoItem  
          key={index}
          id ={index}
          text={todoItem}
          isChecked={deleteItem} /> )}
          
        </ul>
        
      </div>
    </div>
  );
}

export default App;
