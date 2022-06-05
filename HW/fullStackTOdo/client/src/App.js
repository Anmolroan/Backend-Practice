import {useState,useEffect,useRef} from "react"
import './App.css';
import { nanoid } from 'nanoid';

function App() {
  let str="";
  const mainRef = useRef(null);
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
setText("")
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
   mainRef.current.scrollIntoView({
      behavior: "smooth"
    });
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
    <div className=" bg-blue-200 todoContainer font-serif">
      <div className="bg-blue-300 text-2xl p-2 " >MY TODO</div>
     <input type="text" onChange={(e) => setText(e.target.value)} value ={text}className="ml-100 w-80 h-9 mainInput" ref={mainRef} />
     <button onClick={()=>{handleAdd(str)}}>Add</button>

     <div>
     {update  ? <div className="update">
      
      <input type="text" name="name" onChange={(e)=>setName(e.target.value)} />
      <br></br>
      <input type="checkbox" name="status" onChange={handleOnChange} checked={isChecked}/>
      <br></br>
      <button onClick={handlePatch}>Change data</button>
    </div>: ""}
     {todo.map((el,i) => <div key ={el.userId} className=" mt-10 items-center grid gap-4 grid-cols-2">
     <div className="text-blue-500  border-2 p-1  ">{el.name}</div>
     <div className="text-blue-500  border-2 p-1 grid gap-7 grid-cols-3 ">
     <button > {!el.status?"Done":"Not Done"}</button>
     <button onClick={()=>handleUpdate(el.userId)}>Update</button>
     <button onClick={()=>handleDelete(el.userId)}>Delete</button>
     </div>
    
     </div>
     )}
     </div>
   
    </div>
  );
}

export default App;
