import React, { FC, ChangeEvent, useState } from 'react';
import './App.css';
import TodoTask from './Components/TodoTask';
import  {ITask} from './interfaces'

const App: FC = () => {

  const [task, setTask] = useState<string>("");
  const [todoList, setTodoList] = useState<ITask[]>([
    {
      'taskId': 0,
    'taskName': 'string',
    'taskStatusID': false
    },
    {
      'taskId': 1,
    'taskName': 'ggg',
    'taskStatusID': true
    }
  ]);
  const [taskStatus, setTaskStatus] = useState<boolean>(false);


  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
      setTask(event.target.value);
  };
  const taskDone = (taskStatusID: boolean):void =>{
    setTodoList(todoList.filter((todoList)=>{
      if (todoList.taskId === todoList.taskId) {
        taskStatusID = true
      } else {
        taskStatusID = false
      }
    }))
  }
  const addTask = (): void => {
    const newTask = {taskId:todoList.length ,taskName: task, taskStatusID: taskStatus};
    setTodoList([...todoList, newTask]);
    setTask("")
    setTaskStatus(false)
  };
  const deleteTask = (taskNameToDelete:string): void => {
    setTodoList(todoList.filter((task)=>{
      return task.taskName != taskNameToDelete
    }))
  };
  const endedTask = (): void =>{
    setTodoList(todoList.filter((task)=>{
      return task.taskStatusID === false
    }))
  }
  const notEndedTask = (): void =>{
    setTodoList([...todoList])
    setTodoList(todoList.filter((task)=>{
      return task.taskStatusID === true
    }))
  }
  const allTask = (): void =>{
    setTodoList(todoList.filter((task)=>{
      return task.taskStatusID === task.taskStatusID
    }))
  }

  return (
    <div className="App">
      <div className="name">
          <h1>Todo List</h1>
        </div>  
      <div className="header">
        <div className='inputContainer'>
          <input 
            type="text" 
            placeholder='Введите задачу...' 
            name='task'
            value={task}
            onChange={handleChange} 
          />
        </div>
        <button onClick={addTask}>Добавить задачу</button>
      </div>
      <div className="todoList">
      <div className="buttonGroup">
                <button onClick={allTask}>Все</button>
                <button onClick={endedTask}>Выполненные</button>
                <button onClick={notEndedTask}>Активные</button>
            </div>
        {todoList.map((task: ITask, key: number)=>{
          return <TodoTask taskDone={taskDone} key={key} task={task} deleteTask={deleteTask}/>
        })}
      </div>
    </div>
  );
}

export default App;
