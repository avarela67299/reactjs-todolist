import { useState } from "react"

export default function TodoImput({addTodo, inputValue, setInputValue}) {
   
    const handleInputValue = (e) => setInputValue(e.target.value);
    const handleClick = ()=> {
        if(inputValue != ""){
            addTodo(inputValue);
            setInputValue("");
        }
        else{
            alert("Error. Try again");     
        }       
    }      
    
    return(
        <header>
            <input
                value={inputValue}
                type="text"
                onChange={handleInputValue}
                placeholder="Enter todo..."
            />
            <button onClick={handleClick}>add</button>
        </header>
    )
}
    
