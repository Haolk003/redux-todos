import { useDispatch, useSelector } from "react-redux";
import { todoActions } from "./store/todo-slice";
import { useEffect, useState } from "react";

import './App.scss';
import { fetchData} from "./store/todo-action";
import { sendCartData } from "./store/todo-action";
import Todo from "./todo";
import Fotter from "./footer";
const App =()=>{
    const [text,setText] =useState('');
    const [searchItem,setSearchItem]=useState('');
    const dispatch =useDispatch();
    const itemList=useSelector((state)=> state.todo.itemList);
    const search =useSelector((state)=> state.todo.search);
    const active=useSelector((state)=> state.todo.active);
    const completed=useSelector((state)=> state.todo.completedRequest);
    const activeItem = itemList.filter((item)=> item.completed ===false);
    const completedItem=itemList.filter((item)=> item.completed === true);
    const handleSubmit =(e)=>{
        e.preventDefault();
        if(text){
        const id=new Date().getTime();
        dispatch(todoActions.addTodo({
            text,
            id
        }))
         setText('');
    }
        
    }
    useEffect(()=>{
         dispatch(fetchData())
    },[dispatch])
    useEffect(()=>{
          console.log(itemList);
        dispatch(sendCartData(itemList))
          
    },[itemList,dispatch]);
 
  
return(
    <div className="todos">
        <form onSubmit={handleSubmit}>
       <h2>THINGS TO DO</h2>
       <input type="text" placeholder={search ? 'Search' : "AddItem"} className="search" value={search ? searchItem : text} onChange={(item)=> search ? setSearchItem(item.target.value) : setText(item.target.value)}/>
       <ul>
       {!active && !completed  && itemList.map((item,index)=>{
         
           return(
         (item.text.includes(searchItem)) &&  (<Todo key={index} {...item} />)
           ) 
       }
       
         
       )}
       {active && activeItem.map((item,index)=>{
           return(
            (item.text.includes(searchItem)) &&<Todo key={index} {...item}  />
           )
       }
       )}
      
      {completed && completedItem.map((item,index)=>{
           return(
            (item.text.includes(searchItem)) &&<Todo key={index} {...item} />
           )
       }
       )}
       </ul> 
          
       </form>
         <Fotter />
       
    </div>
)
}
export default App ;