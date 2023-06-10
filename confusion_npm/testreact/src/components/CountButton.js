import {useState} from "react";
function MyButton(){
    const [countt,setCountt]=useState('asasd');
 return(
  <div>
    <button onClick={()=>setCountt(countt+1)}>
       My Click: {countt}
    </button>
  </div>
 )
}
export default MyButton