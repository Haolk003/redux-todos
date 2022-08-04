import { createSlice } from "@reduxjs/toolkit";
const todoSlice = createSlice({
    name:"todo",
    initialState:{
        itemList:[],
        active:false,
        completedRequest:false,
        completed:false,
        search:false,
    },
    reducers:{
        getTodo(state,action){
          state.itemList=action.payload;  
        },
        addTodo(state,action){
            const newItem=action.payload;
            state.itemList.push({
                text:newItem.text,
                completed:false,
                id:newItem.id
            })
        },
        completedTodo(state,action){
            const id=action.payload;
            const change=state.itemList.find((item)=> item.id===id);
            change.completed=!change.completed;
        },
        handleActive(state){
            state.active=true;
            state.completedRequest=false;
        },
        handleCompleted(state){
            state.completedRequest=true;
            state.active=false;
        },
        all(state){
            state.completedRequest=false;
            state.active=false;
        },
        search(state){
            state.search=true;
        },
        add(state){
            state.search=false;
        },
        RemoveItem(state,action){
            const id=action.payload;
            state.itemList=state.itemList.filter((item)=> item.id !== id);

        }
        
        
    }
})
export const todoActions=todoSlice.actions;
export default todoSlice;