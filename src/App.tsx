import React, { FC, ChangeEvent, useState } from 'react';
import './App.css';
import  {ITask} from './interfaces'

const App: FC = () => {

  const [task, setTask] = useState<string>("");
  const [todoList, setTodoList] = useState<ITask[]>([]);


  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
      setTask(event.target.value);
    
  const addTask = (): void => {
    const newTask = {taskName: task};
    setTodoList([...todoList, newTask]);
    setTask("")
  
  };

  }
  return (
    <div className="App">
      <div className="header">
        
          <input 
            type="text" 
            placeholder='Новая задача' 
            name='task'
            value={task}
            onChange={handleChange} 
          />
        
        <button>Добавить задачу</button>
      </div>
      <div className="todoList"></div>
    </div>
  );
}

export default App;
