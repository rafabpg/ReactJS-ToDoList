import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { ButtonTask, ContainerInputTask, InputTask } from "./styles";
import {PlusCircle} from 'phosphor-react';

interface inputProps{
    handlerNewTask:Function;
}


function Input({handlerNewTask}:inputProps){
    
    const [newtask,setNewTask] = useState('');

    function validationInputHandler(event:InvalidEvent<HTMLInputElement>){
        event.target.setCustomValidity('campo obrigatorio')
    }

    function inputHandler(event:ChangeEvent<HTMLInputElement>){
        setNewTask(event.target.value);
    }

    function submitHandler(event:FormEvent){
        event.preventDefault();
        handlerNewTask(newtask)
        console.log(newtask);
        setNewTask('');
    }
    
    const disabledButton = newtask.length == 0;

    return(
        <ContainerInputTask onSubmit={submitHandler}>
            <InputTask  onInvalid={validationInputHandler} type="text" onChange={inputHandler} value={newtask} required placeholder="Adicione uma nova Tarefa"/>
            <ButtonTask type="submit" disabled={disabledButton}>Criar<i><PlusCircle size={15} color="#F2F2F2" /></i></ButtonTask>
        </ContainerInputTask>
    );
}
export default Input;