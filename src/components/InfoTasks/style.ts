import styled from "styled-components";

interface ColorProps {
    secondInfo?:boolean
}

export const InfoContainer = styled.div`
    display:flex;
    justify-content:center;
    aign-items:center;
    gap:20rem;
    margin:1rem;
`;

export const InfoNumberTasks = styled.p<ColorProps>`
    font-size:1rem;
    font-weight:600;
    i{
        border:5px solid #333333;
        border-radius:50%;
        background-color:#333333;
        color:#D9D9D9;
    }
    color:${props => props.secondInfo ?  "#8284FA" : "#4EA8DE"}

`;