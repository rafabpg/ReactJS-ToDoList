import { InfoContainer, InfoNumberTasks } from "./style";

interface InforTaskProps{
    numberTasks:number
}

function InfoTasks(props:InforTaskProps){
    return(
        <InfoContainer>
            <InfoNumberTasks>Tarefas Criadas <i>{props.numberTasks}</i></InfoNumberTasks>
            <InfoNumberTasks secondInfo>Concluidas <i></i></InfoNumberTasks>
        </InfoContainer>
    );
}
export default InfoTasks;