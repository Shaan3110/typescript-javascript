import React from "react";
import './TaskInput.css'

const TaskInput = () => {
  return (
    <div className="taskinput">
      <input type="text" placeholder="title" />
      <textarea name="content" id="" cols={20} rows={10} placeholder="content"></textarea>
      <div className="add">
        <button>Add</button>
        <i className="fa-solid fa-plus"></i>
      </div>
    </div>
  );
};

export default TaskInput;
