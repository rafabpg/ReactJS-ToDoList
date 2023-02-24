import {ClipboardText} from 'phosphor-react';
import { ConteainerEmpty, TextEmpty } from './style';


function EmptyList(){
    return(
      <>
        <ConteainerEmpty>
          <ClipboardText size={50} color="#808080" />
          <TextEmpty><strong>Você ainda não tem tarefas cadastradas</strong><br/>
            Crie tarefas e organize seus itens a fazer</TextEmpty>
        </ConteainerEmpty>
      </>  
    );
}
export default EmptyList;