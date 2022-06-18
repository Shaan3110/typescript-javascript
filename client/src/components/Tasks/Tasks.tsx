import React, { useEffect, useState } from "react";
import { getTasks } from "../../apis/Tasks/Task";
import { TaskList, TasksProps } from "../../models/Task";
import "./Tasks.css";

export const Tasks: React.FC<TasksProps> = ({d,changed}: TasksProps) => {

  //states
  const [callapi, setcallapi] = useState<Boolean>(false)

  //api-call
  useEffect(() => {
    const receivedata = () => {
      getTasks().then((res)=> {
        changed(res)
      }).catch((error)=> {
        console.log(error)
      })
    };
  
    receivedata();
  }, [callapi]);

  return (
    <div className="tasks">
      
        {
          d?.map((ele)=> {

            return <div className="task" key={ele.id}>
            <h1>{ele.title}</h1>
            <p>
              {ele.content}
            </p>
            </div>
          })
        }
    </div>
  );
};

export default Tasks;
