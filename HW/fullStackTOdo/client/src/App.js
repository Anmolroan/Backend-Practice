import {useState,useEffect} from "react"
import './App.css';
import { nanoid } from 'nanoid'
function App() {
  let str="";
  const [todo,setTodo] = useState([]);
  const [text,setText] = useState("");
  const [stat,setStatus] = useState(false);
  const [update,setUpdate] = useState(false);
  const handleOnChange = () => {
    setIsChecked(!isChecked);
    console.log(isChecked)
  };
  
  const handleDelete =(id) => {
fetch(`http://localhost:1234/${id}`,{
  method: "DELETE",
}).then((response) =>response.json()).then(data => setTodo(data));
  }
  const handleShow =(data) => {
   setTodo( data);
  
   console.log(todo)
  }
  const handleAdd =(str) => {
const payload ={
  userId:nanoid(),
name:text,
status:stat
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
    
    
  },[]);

  const [name,setName] =useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [id,setId]= useState("")
  const handleUpdate =(id) =>{
    setUpdate(true);
    
    setId(id);
  };
  const handlePatch =()=>{
    const payload ={
 userId:id,
name:name,
status:isChecked
};
    fetch(`http://localhost:1234/${id}`,{
 method: 'PATCH',
 headers: {'Content-Type': 'application/json'},
 body: JSON.stringify(payload)
}).then((res)=>res.json()).then((data)=>setTodo(data));
setUpdate(false)
  }
  return (
    <div className="App">
     <input type="text" onChange={(e) => setText(e.target.value)}/>
     <button onClick={()=>{handleAdd(str)}}>Add</button>
     <div>
     {todo.map((el,i) => <div key ={el.userId}>
     <span>{el.name}</span>
     <button>{!el.status?"Done":"Not Done"}</button>
     <button onClick={()=>handleUpdate(el.userId)}>Update</button>
     <button onClick={()=>handleDelete(el.userId)}>Delete</button>
    
     </div>
     )}
     </div>
     {update  ? <div className="update">
      
       <input type="text" name="name" onChange={(e)=>setName(e.target.value)}/>
       <br></br>
       <input type="checkbox" name="status" onChange={handleOnChange} checked={isChecked}/>
       <br></br>
       <button onClick={handlePatch}>Change data</button>
     </div>: ""}
    </div>
  );
}

export default App;
