import * as M from "@mui/material";
import styled from "styled-components";

const Container = styled(M.Box)`
    background-color: ${(props) => props.theme.colors.secundary};
    width: 100vw;
    height: 100vh;
    display: flex;
`;

export default Container;
