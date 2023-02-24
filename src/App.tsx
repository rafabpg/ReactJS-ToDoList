import { GlobalStyles } from "./global"
import Header from "./components/Header"
import Input from "./components/Input"
import InfoTasks from "./components/InfoTasks"
import Task from "./components/Task"
import { v4 as uuidv4  } from 'uuid';
import { useState } from "react";
import EmptyList from "./components/EmptyList"




function App() {

  const [allTasks,setAllTasks] = useState( [
    {
      id:uuidv4(),
      content:"lorem ipsum",
      completed:false
    },
    {
      id:uuidv4(),
      content:"lorem ipsum 2",
      completed:false
    },
    {
      id:uuidv4(),
      content:"lorem ipsum 3",
      completed:false
    },
  ])

  

  function deleteTaskHandler(id:string){
    const listTaskWithoutDeletedOne = allTasks.filter(item=>{
      return (item.id != id) 
    })
    setAllTasks(listTaskWithoutDeletedOne);
  }

  function handlerNewTask(text:string){
    setAllTasks([...allTasks,{
      id:uuidv4(),
      content:text,
      completed:false
    }])
  }

  function handlerCheckedTask(id:string){
    const listTaskWithCheckedOne = allTasks.filter(item=>{
      if(item.id == id){
        item.completed = !item.completed;
      }
      return item;
    })
    setAllTasks(listTaskWithCheckedOne);
  }

  const allDoneTasks = allTasks.filter(item => {
    return item.completed !== false
  })

  return (
    <>
      <GlobalStyles/>
      <Header/>
      <Input handlerNewTask={handlerNewTask}/>
      <InfoTasks numberTasks={allTasks.length} doneTasks={allDoneTasks.length}/>
      {
        allTasks.map(item=>{
          if(allTasks.length > 0){
            return (
              <Task 
                id={item.id} 
                deleteTaskHandler={deleteTaskHandler} 
                key={item.id} 
                handlerCheckedTask={handlerCheckedTask}
                content={item.content} 
                completed={item.completed}/>
          )}})
      }

      {allTasks.length == 0 && <EmptyList/>}
    </>
  )
}

export default App
