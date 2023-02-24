import styled from "styled-components";

interface lineProps {
    done:boolean
}

export const TaskContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    margin: 1rem 20rem ;
    gap:1rem;
    background-color:#262626;
    border:1px solid #333333;
`;


export const TaskCheckbox = styled.input.attrs({type: 'checkbox'})`
    cursor:pointer;
    border-radius:50;
    border:1px solid red;
`;

export const TaskContent = styled.p<lineProps>`
    color:#FFFFFF;
    font-size:1.2rem;
    font-weight:400;
    text-decoration: ${props=>props.done == true ? "line-through" : "no-underline"}};
    
`;

export const TaskTrash = styled.button`
    cursor:pointer;
    margin-left:4rem;
`;