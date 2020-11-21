import logo from './logo.svg';
import './App.css';
import React , {useState} from 'react';

function App() {
  const [todo,setArr] = useState([]);
  const [value,todoValue] = useState(" ");
  const [field,changeField] = useState(true);
  const handleChange = (e)=>{
       todoValue(e);
  }
const addValue = ()=>{
    setArr([...todo,value]);
}
const deleteValue = (i)=>{
  let old_arr = [...todo];
  old_arr.splice(i,1);
  setArr(old_arr);
}

const updateValue = (i)=>{
var newValue = prompt ("enter updated value");

 let old_arr = [...todo];
old_arr[i] = newValue
  setArr(old_arr);
}

  return (
    <div className="App">
<input  type="text" onChange={(e)=>{handleChange(e.target.value)}}></input>
<button onClick={()=>addValue()}>Add Value</button>
<ul>
  {todo.map((v,i)=>{
      return( 
      <li key={i}>
             {v}
             <button onClick={(e)=>deleteValue(i)}>Delete</button>
             <button onClick={(e)=>updateValue(i)}>Update Value</button>
      </li>
  )})}
</ul>
    </div>
  );
}

export default App;
