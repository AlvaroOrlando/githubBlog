import styled from "styled-components";

export const PostContainer = styled.main`
    width: 100%;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
`

export const PostHeaderContainer = styled.section`
    width: 100%;
    max-width: 52rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    margin-top: -64px;
    padding: 2rem;

    background-color: ${props => props.theme['--base-profile']};
    border: 1px solid ${props => props.theme['--base-profile']};
    border-radius: 10px;
    filter: drop-shadow(0px 2px 28px rgba(0, 0, 0, 0.2));
`

export const LinksContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
       

    & span{

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      color: ${props => props.theme['--blue']};
      font-weight: bold;
      font-size: 0.75rem;
      line-height: 160%;

    & h1{
        color: ${props => props.theme['--base-title']};
        font-style: bold;
        font-size:1.5rem;
        line-height: 130%
    }
}
    
`

export const LinkItemConteiner = styled.div`
    display: flex;
    gap: 0.5rem;
    cursor: pointer;
    border-bottom: 1px solid  transparent;


      &:hover{
        border-bottom: 1px solid  ${props => props.theme['--blue']};
        transition: ease-in-out 0.3s;
      }

`

export const PostHeaderTitle = styled.div`
    width: 100%;

    & h1{
        color: ${props => props.theme['--base-title']};
        font-style: bold;
        font-size:1.5rem;
        line-height: 130%
    }
`

export const PostHeaderItemContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    & span{
        font-weight: 400;
        font-size: 1rem;

        color: ${props => props.theme['--base-subtitle']};
    }
`

export const PostFooterContainer = styled.div`
    width: 100%;
    display: flex;
    gap: 1rem;
`

export const PostMainContainer = styled.section`
    width: 100%;
    max-width: 52rem;
    padding: 2.4rem;
    display: flex;
    flex-direction: column;
`

export const TextMainContainer = styled.div`
    width: 100%;

    & p{
        font-size:1rem;
        color: ${props => props.theme['--base-text']};
        margin-bottom:1rem;
        line-height: 160%;
    }

    & h1{
        font-size:1rem;
        width: fit-content;
        border-bottom: 1px solid ${props => props.theme['--blue']};
        margin-bottom:0.5rem;
        color: ${props => props.theme['--blue']};
    }


`

export const CodeContainer = styled.div`
    width: 100%;
    background-color: ${props => props.theme['--base-post']};
    padding:1rem;
    border-radius: 2px;

    & p{
        color: ${props => props.theme['--base-text']};
    }
`