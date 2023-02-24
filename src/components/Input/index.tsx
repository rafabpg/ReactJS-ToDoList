import { ButtonTask, ContainerInputTask, InputTask } from "./styles";
import {PlusCircle} from 'phosphor-react';

function Input(){
    return(
        <ContainerInputTask>
            <InputTask type="text" placeholder="Adicione uma nova Tarefa"/>
            <ButtonTask>Criar<i><PlusCircle size={15} color="#F2F2F2" /></i></ButtonTask>
        </ContainerInputTask>
    );
}
export default Input;