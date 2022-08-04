import  {useDispatch, useSelector} from 'react-redux';
import { todoActions } from './store/todo-slice';
import {FiTrash} from 'react-icons/fi';
const Todo =({text,id,completed})=>{
 const dispatch =useDispatch();

 const changeCompleted =()=>{
   dispatch(todoActions.completedTodo(id));
 }   
 const RemoveItem = ()=>{
   dispatch(todoActions.RemoveItem(id));
 }
return(
    <li>
      <input type="checkbox" id={id} onChange={changeCompleted} checked={completed ? "checked" : "" } />
      <label for={id} className={completed && "completed"}>{text}</label>
      <FiTrash className='remove' onClick={RemoveItem} />
        </li>
)
}
export default Todo;