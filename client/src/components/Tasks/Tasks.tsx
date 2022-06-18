import React, { useEffect, useState } from "react";
import { getTasks } from "../../apis/Tasks/Task";
import { TaskList, TasksProps } from "../../models/ITask";
import "./Tasks.css";

export const Tasks: React.FC<TasksProps> = ({ d, changed }: TasksProps) => {
  //states
  const [callapi, setcallapi] = useState<Boolean>(false);

  console.log("Tasks")
  console.log(d)


  //api-call
  useEffect(() => {
    const receivedata = () => {
      getTasks()
        .then((res) => {
          changed(res);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    receivedata();
  }, [callapi]);

  return (
    <div className="tasks">
      {d?.map((ele) => {
        return ele !== null ? (
          <div className="task" key={ele.id}>
            <h1>{ele?.title}</h1>
            <p>{ele?.content}</p>
          </div>
        ) : (
          null
        );
      })}
    </div>
  );
};

export default Tasks;
