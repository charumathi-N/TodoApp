import React from "react";

const Todo  = ({task})=>{
    return(
            <div  key={task.task} 
            className={!task.isActive ? "strike" :""}>
              {task.task}
            </div>
        )
};
export default Todo;