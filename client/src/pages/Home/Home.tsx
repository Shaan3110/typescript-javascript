import React from 'react'
import Header from '../../components/Header/Header'
import TaskInput from '../../components/TaskInput/TaskInput'
import Tasks from '../../components/Tasks/Tasks'
import './Home.css'

const Home = () => {
  return (
    <>
    <Header/>
    <div className="dashboard">
      <TaskInput/>
      <Tasks/>
    </div>
    </>
  )
}

export default Home