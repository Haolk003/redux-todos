import {IoIosAdd,IoIosSearch} from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { todoActions } from './store/todo-slice';
const Fotter=()=>{
    const itemList=useSelector((state)=> state.todo.itemList);
    const active=useSelector((state)=> state.todo.active);
    const completedRequest=useSelector((state)=> state.todo.completedRequest)
    const dispatch =useDispatch();
    const handleActive=()=>{
        dispatch(todoActions.handleActive());
    }
    const handleCompleted=()=>{
        dispatch(todoActions.handleCompleted())
    }
    const All =()=>{
        dispatch(todoActions.all())
    }
    const search =()=>{
        dispatch(todoActions.search());
    }
    const add =()=>{
        dispatch(todoActions.add())
    }
return(

    <div className='footer'>
        <IoIosAdd className='add-icon' onClick={add} />
        <IoIosSearch className='search-icon' onClick={search} />
        <span className='items '>{`${itemList.length} items left`}</span>
        <span className={`${!active && !completedRequest && 'active'} All btn`} onClick={All} >All</span>
        <span className={`${active && 'active'} Active btn`} onClick={handleActive}>Active</span>
        <span className={`${completedRequest && 'active'} Completed btn`} onClick={handleCompleted}>Completed</span>
    </div>
)
}
export default Fotter;      