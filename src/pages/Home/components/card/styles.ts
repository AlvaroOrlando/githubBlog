import styled from "styled-components";

export const CardContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;


    width: 100%;
    max-width: 25em;
    background-color: ${props => props.theme['--base-post']};
    padding:2rem;
    border-radius: 10px;
    

    & h1{
        font-size:1.25rem;
        max-width: 16rem;
        font-weight: bold;
        line-height: 160%;
        color: ${props => props.theme['--base-title']};
    }

    & p{
        font-size:1rem;
        font-weight: 400;
        line-height: 160%;
        color: ${props => props.theme['--base-text']};
        margin-top: 1.25rem;
        margin-bottom: 1.25rem;
    }
    
    & span{
        position: absolute;
        right: 2rem;
        top: 2.35rem;
        font-size: 0.875rem;
        color: ${props => props.theme['--base-span']};
        font-weight: 400;
    }

    & a{
        color: rgb(175, 194, 212);
        text-decoration: none;
        text-align: justify;

        &:hover {
            opacity: 0.8;
        }

       
    }

   

`