import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus{
        outline:0;
    }

    html{
        background-color: #DEDEDE;
    }

    body{
        -webkit-font-smoothing: antialiased;
        background: ${props => props.theme['--base-background']};
        width:100%;
        max-width: 1440px;
        margin: 0 auto;
        font-family: 'Nunito', sans-serif;
    }

    button{
        outline:0;
        border:none;
        background-color: transparent;
        line-height: 0px;
    }

    
    
`
