import { todoActions } from "./todo-slice";
export const sendCartData =(itemList)=>{
    return async(dispatch)=>{
        const request =async ()=>{
            fetch('https://todos-redux-9916f-default-rtdb.firebaseio.com/todoItem.json',{
            method:"PUT",
            body:JSON.stringify(itemList)
        });
        }
        try{
            await request();
        }
        catch(error){
            console.log(error);
        }
    }
}
export const fetchData=()=>{
    return async(dispatch)=>{
        const request = async ()=>{
            const response=await fetch('https://todos-redux-9916f-default-rtdb.firebaseio.com/todoItem.json');
            const data=await response.json();
            return data;
        }
        try{
            const TodoData=await request();
            dispatch(todoActions.getTodo(TodoData))
        }
        catch(error){
            console.log(error);
        }
    }
}