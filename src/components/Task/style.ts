import styled from "styled-components";

interface lineProps {
    done:boolean
}

export const TaskContainer = styled.div`
    display:flex
    gap:1rem

    i{
        cursor:pointer;
    }
`;


export const TaskCheckbox = styled.input`
    cursor:pointer;
`;

export const TaskContent = styled.p<lineProps>`
    color:#FFFFFF;
    text-decoration: ${props=>props.done == true ? "line-through" : "no-underline"}};
`;

export const TaskTrash = styled.button`
    cursor:pointer;
`;