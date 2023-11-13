import {useState} from "react";
import Todo from "./Todo.js"



const Todos = ({todoItem,handler}) => {
  const taskStatusToggler = (currentItem) => {
    console.log(currentItem);
    console.log(currentItem);
    currentItem = { ...currentItem, isActive : !currentItem.active};
    todoItem = {...todoItem, ...currentItem}
  }
  // const todoClickHandler = (task) => {
  //   return ()=>{
  //     const a = todoItem.filter(x=>x!== task.task);
  //     todoItem = [...a];
  //   };
  // };
 
  if(todoItem.length <= 0 ) return <div>No Tasks added so far</div>
  return( <div>
    {
       todoItem.map((todo)=>(
         <div 
         key={todo.task}
         className="rounded my-3 p-2 shadow-sm w-50"
         onClick={()=>handler(todo)}>
            <Todo task={todo}/>
         </div>
       ))
    }
  </div>);
}

export default Todos;