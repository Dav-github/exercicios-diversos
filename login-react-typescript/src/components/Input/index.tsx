import styled from "styled-components";

interface InputProps {
    placeholder: string;
}

const Input = styled.input<InputProps>`
    all: unset;
    box-sizing: border-box;
    background-color: #2e2e36;
    width: 300px;
    height: 48px;
    padding: 0px 8px;

    font-family: Roboto;
    font-size: 12px;
    color: #fff;
`;

export default Input;
