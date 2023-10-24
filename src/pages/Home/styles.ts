import styled from "styled-components";

export const HomeContainer = styled.main`
    width: 100%;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
`

export const ProfileContainer = styled.div`
    width: 100%;
    max-width: 52rem;
    display: flex;
    align-items: center;
    gap: 2rem;

    margin-top: -64px;
    padding: 2rem;

    background-color: ${props => props.theme['--base-profile']};
    border: 1px solid ${props => props.theme['--base-profile']};
    border-radius: 10px;
    filter: drop-shadow(0px 2px 28px rgba(0, 0, 0, 0.2));
`

export const AvatarContainer = styled.div`

    & img{
        width: 9.25rem;
        height: 9.25rem;
    border-radius: 8px;

    }
`

export const ProfileTextContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`

export const ProfileHeader = styled.div`
    width: 100%;
    padding-top: 0.5rem;

    & h1{
        color: ${props => props.theme['--base-title']};
        font-style: bold;
        font-size:1.5rem;
        line-height: 130%
    }

    & p{
        color: ${props => props.theme['--base-text']};
        font-size:1rem;
        line-height: 160%
    }
`

export const ProfileFooter = styled.div`
    width: 100%;
    display: flex;
    gap: 1rem;
`

export const ProfileItemContainer = styled.div`
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

export const SearchContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 52rem;
    padding-top: 1.5rem;
`

export const SearchHeader = styled.div`
    width:100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;

    & p{
        font-weight: bold;
        font-size: 1.125rem;
        line-height: 160%;
        color: ${props => props.theme['--base-subtitle']};
    }

    & span{
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 160%;
        color: ${props => props.theme['--base-span']};
    }
`

export const SearchInput = styled.input`
    width: 100%;
    height: 3.125rem;
    padding: 0.75rem 1rem 0.75rem 1rem;
    

    background-color: ${props => props.theme['--base-input']};

    border: 1px solid ${props => props.theme['--base-border']};
    border-radius: 6px;

    &:focus{
        color: ${props => props.theme['--base-text']};
        font-size: 1rem;
        border-color:${props => props.theme['--blue']};
    }

    &::placeholder{
        color: ${props => props.theme['--base-label']};
    }
`

export const ArrowUpRightContainer = styled.div`
    position: absolute;
    right: 32px;
    top: 30px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    & span{
        color: ${props => props.theme['--blue']};
        font-weight: bold;
        font-size: 0.75rem;
        line-height: 160%;
    }

    cursor: pointer;
    border-bottom: 1px solid  transparent;


    &:hover{
        border-bottom: 1px solid  ${props => props.theme['--blue']};
        transition: ease-in-out 0.2s;
    }
`

export const CardsMainContainer = styled.section`
    width: 100%;
    max-width: 52rem;

    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    padding-bottom: 2rem;
`
