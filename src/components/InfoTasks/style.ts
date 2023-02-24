import styled from "styled-components";

interface ColorProps {
    secondInfo?:boolean
}

export const InfoContainer = styled.div`
    display:flex;
    justify-content:center;
    aign-items:center;
    gap:2rem;
`;

export const InfoNumberTasks = styled.p<ColorProps>`
    color:${props => props.secondInfo ?  "#8284FA" : "#4EA8DE"}

`;