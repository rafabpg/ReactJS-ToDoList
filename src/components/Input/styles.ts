import styled from "styled-components";

export const ContainerInputTask = styled.form`
    display:flex;
    gap:1rem;
    align-items:center;
    justify-content:center;
`;

export const InputTask = styled.input`
    outline:none;
    padding:.8rem .5rem;
    border:1px solid #0D0D0D;
    border-radius:7px;
    background-color:#454545;
    color:#808080;
    font-size:1rem;
    font-wieght:500;
    width:500px;
    margin: 1rem;
`;

export const ButtonTask = styled.button`
    border:none;
    border-radius:5px;
    cursor:pointer;
    padding: .7rem 1rem;
    background-color:#1E6F9F;
    font-size:1rem;
    color:#F2F2F2;
    display: flex;
    gap:.3rem;
    align-items:center;
    justify-content:center;
    font-weight:600;
    transition:all .4s ease-in-out;
    i{
        margin:0;
        padding-top:.3rem;
    }

    &:hover{
        transform: translate(0, 5px);
    }
`;