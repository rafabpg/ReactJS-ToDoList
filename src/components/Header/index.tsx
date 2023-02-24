import { Rocket } from "phosphor-react";
import { HeaderConteiner, TitleToDolist } from "./style";


function Header(){
    return(
        <HeaderConteiner>
            <i><Rocket size={32} color="#4EA8DE" /></i>
            <TitleToDolist>To<strong>Do</strong></TitleToDolist>
        </HeaderConteiner>
    );
}
export default Header;