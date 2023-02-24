import { InfoContainer, InfoNumberTasks } from "./style";

interface InforTaskProps{
    numberTasks:number,
    doneTasks:number
}

function InfoTasks(props:InforTaskProps){
    return(
        <InfoContainer>
            <InfoNumberTasks>Tarefas Criadas <i>{props.numberTasks}</i></InfoNumberTasks>
            <InfoNumberTasks secondInfo>
                Concluidas <i>{props.doneTasks}
                {props.doneTasks > 0 && <strong> de {props.numberTasks}</strong> }
                </i> 
                </InfoNumberTasks>
        </InfoContainer>
    );
}
export default InfoTasks;