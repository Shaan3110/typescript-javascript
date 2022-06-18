import React, { useState, useEffect } from "react";
import { postTasks } from "../../apis/Tasks/Task";
import { TasksProps } from "../../models/Task";
import "./TaskInput.css";

export const TaskInput: React.FC<TasksProps> = ({ d, changed }: TasksProps) => {
  //states
  const [callapi, setcallapi] = useState<Boolean>(false);
  const [sendd, setsendd] = useState<Boolean>(false);
  const [content, setcontent] = useState<String>("");
  const [title, settitle] = useState<String>("");

  //api-call
  useEffect(() => {
    const senddata = () => {
      postTasks()
        .then((res) => {
          if (res === 200) {
            let updatedata: Array<Object> | undefined = d;
            updatedata?.push({
              id: d?.length! + 1,
              title: title,
              content: content,
            });
            changed(updatedata);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };

    if(sendd)
    {
      senddata();
    }
  }, [callapi]);

  return (
    <div className="taskinput">
      <h1>Add Tasks</h1>
      <input type="text" placeholder="title" onChange={(event)=> {
          settitle(event?.target?.value)
        }}/>
      <textarea
        name="content"
        id=""
        cols={20}
        rows={10}
        placeholder="content"
        onChange={(event)=> {
          setcontent(event?.target?.value)
        }}
      ></textarea>
      <div className="add">
        <button onClick={()=> {
          setsendd(true);
          callapi ? setcallapi(false) : setcallapi(true);
        }}>Add</button>
        <i className="fa-solid fa-plus"></i>
      </div>
    </div>
  );
};

export default TaskInput;
