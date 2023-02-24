import { ChangeEvent, FormEvent, useState } from "react";
import { ButtonTask, ContainerInputTask, InputTask } from "./styles";
import {PlusCircle} from 'phosphor-react';

interface inputProps{
    handlerNewTask:Function;
}


function Input({handlerNewTask}:inputProps){
    
    const [newtask,setNewTask] = useState('');


    function inputHandler(event:ChangeEvent<HTMLInputElement>){
        setNewTask(event.target.value);
    }

    function submitHandler(event:FormEvent){
        event.preventDefault();
        handlerNewTask(newtask)
        console.log(newtask);
        setNewTask('');
    }

    return(
        <ContainerInputTask onSubmit={submitHandler}>
            <InputTask type="text" onChange={inputHandler} value={newtask} placeholder="Adicione uma nova Tarefa"/>
            <ButtonTask type="submit">Criar<i><PlusCircle size={15} color="#F2F2F2" /></i></ButtonTask>
        </ContainerInputTask>
    );
}
export default Input;