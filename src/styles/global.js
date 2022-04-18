import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        
    }
    body {
        overflow-x: hidden;
        p, a {
            overflow-y: hidden;
        }
    }
    body, input, textarea, button, select {
        outline: 0;
        font-family: 'Poppins', sans-serif;
    }
    button { cursor: pointer };
`;