import {useState,useEffect} from "react"
import './App.css';
import { nanoid } from 'nanoid'
function App() {
  let str="";
  const [todo,setTodo] = useState([]);
  const [text,setText] = useState("");
  const handleShow =(data) => {
   setTodo( data);
  
   console.log(todo)
  }
  const handleAdd =(str) => {
const payload ={
  userId:nanoid(),
name:text
};
fetch("http://localhost:1234",{
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify(payload)
}).then((res)=>res.json()).then((data)=>setTodo(data));

}
  
  useEffect(() =>{
    
      fetch("http://localhost:1234").then((res)=>res.json()).then((data)=>{
        handleShow(data);
      
      })
    
    
  },[])
  return (
    <div className="App">
     <input type="text" onChange={(e) => setText(e.target.value)}/>
     <button onClick={()=>{handleAdd(str)}}>Add</button>
     <div>{todo.map((el,i) => <div key ={i}>{el.name}</div>)}</div>
    </div>
  );
}

export default App;
