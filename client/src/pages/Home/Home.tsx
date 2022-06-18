import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import TaskInput from '../../components/TaskInput/TaskInput'
import Tasks from '../../components/Tasks/Tasks'
import { TaskList } from '../../models/ITask'
import './Home.css'

const Home = () => {
  const [data, setdata] = useState<TaskList|undefined>([]);
  return (
    <>
    <Header/>
    <div className="dashboard">
      <TaskInput d={data} changed={setdata}/>
      <Tasks d={data} changed={setdata}/>
    </div>
    </>
  )
}

export default Home