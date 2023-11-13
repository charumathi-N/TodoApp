import { Button } from "reactstrap";
import { useState } from "react";
import Todos from "./Todos.js";

const ReadInput  =  ()=>{
   const [task, setTask] = useState("");
   const [todos, setTodos] = useState([]);

   const clickHandler = () =>{
     if(task.trim()===""){
      alert("Task is mandatory");
      return;
     }
    const item = {task:task.trim(), isActive:true};
    let temp = [...todos];
    temp = [...temp,item];
    setTodos(temp);
    //setTodos(...todos, item);
    setTask("");
    }
    const toggleTaskStatus = (task) => {
    let updatedTasks = todos.map((todo)=>
      todo.task === task.task?{...todo,isActive: !todo.isActive}
       : {...todo}
      )
      setTodos(updatedTasks);
    };
    


    return(
    <> 
    {/* jsx fragment will not render on the screen */}
    <section>
      <div className="d-flex align-items-center my-3">
      <input type="text" placeholder="Enter Task" maxLength="20"
      onChange={(event)=>setTask(event.target.value)}
      value={task}/>
      <Button className="btn mx-3" color="primary" onClick={clickHandler}>Add Task</Button>    
      </div> 
    </section>
    <Todos todoItem={todos} handler={toggleTaskStatus}/>
    </>
  )

}

export default ReadInput;