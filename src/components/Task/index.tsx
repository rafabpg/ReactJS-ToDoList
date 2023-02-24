import {Trash} from 'phosphor-react';
import { TaskCheckbox, TaskContainer, TaskContent, TaskTrash } from './style';

interface TaskProps{
    id:string,
    content:string,
    completed:boolean,
    deleteTaskHandler:Function,
    handlerCheckedTask:Function
}


function Task({content,completed,deleteTaskHandler,handlerCheckedTask,id}:TaskProps){
    // console.log(completed);
    function deleteTask(){
        deleteTaskHandler(id)
    }

    function checkedTask(){
        console.log('checked');
        handlerCheckedTask(id);
    }
    console.log(completed)
    return(
        <TaskContainer>
            <TaskCheckbox type="checkbox" onClick={checkedTask}  checked={completed}  />
            <TaskContent done={completed}>{content}</TaskContent>
            <TaskTrash onClick={deleteTask}>
                <Trash size={12} color="#808080" />
            </TaskTrash>
        </TaskContainer>
    );
}
export default Task;