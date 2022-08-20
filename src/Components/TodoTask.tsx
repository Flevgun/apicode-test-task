import React from 'react';
import { ITask } from "../interfaces"

interface Props {
    task: ITask;
    deleteTask(taskNameToDelete: string): void;
    taskDone(taskStatusID: boolean):void
}

const TodoTask = ({ task, deleteTask, taskDone }: Props) => {
    return (
        <div>
            <div className="task">
                <div className="content">
                    <span>{task.taskName}</span>
                    {task.taskStatusID === true
                        ?
                        <span
                            className='completed'
                            onClick={()=>{
                                taskDone(true)
                            }}
                            aria-label='mark icon'
                            role="img"
                        >✅</span>
                        :
                        <span
                            className='completed'
                            onClick={()=>{
                                taskDone(false)
                            }}
                            aria-label='delete icon' 
                            role="img"
                        >❌</span>
                    }
                </div>

                <button onClick={() => {
                    deleteTask(task.taskName)
                }}>Удалить</button>
            </div>
        </div>
    );
};

export default TodoTask;