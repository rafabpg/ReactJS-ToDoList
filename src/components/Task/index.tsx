import {Trash} from 'phosphor-react';
import { TaskCheckbox, TaskContainer, TaskContent, TaskTrash } from './style';

interface TaskProps{
    id:string,
    content:string,
    completed:boolean,
    deleteTaskHandler:Function
}


function Task({content,completed,deleteTaskHandler,id}:TaskProps){
    // console.log(completed);
    function deleteTask(){
        deleteTaskHandler(id)
    }

    return(
        <TaskContainer>
            <TaskCheckbox type="checkbox"  />
            <TaskContent >{content}</TaskContent>
            <TaskTrash onClick={deleteTask}>
                <Trash size={12} color="#808080" />
            </TaskTrash>
        </TaskContainer>
    );
}
export default Task;