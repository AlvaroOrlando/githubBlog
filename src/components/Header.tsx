import { HeaderContainer } from "./styles";
import  logo  from '../assets/imgs/githublogo.png'
import  effectRight  from '../assets/imgs/effectRight.png'
import  effectLeft  from '../assets/imgs/effectLeft.png'
import { Link } from "react-router-dom";

export function Header(){
    return (
        <HeaderContainer>
           <img width={300} src={effectLeft} alt="" />
           <Link to="/">
             <img  src={logo} alt="" />
           </Link>
           <img width={300} src={effectRight} alt="" />
        </HeaderContainer>
    )
}