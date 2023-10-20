import { LinkItemConteiner, LinksContainer, PostContainer, PostFooterContainer, PostHeaderContainer, PostHeaderItemContainer, PostHeaderTitle, PostMainContainer, TextMainContainer, CodeContainer } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import '../../fontawesome';
import { Link } from "react-router-dom";

export function Post(){
    return (
      <PostContainer>
        <PostHeaderContainer>
          <LinksContainer>
          
            <Link style={{'textDecoration':'none'}} to='/'>
              <LinkItemConteiner>
                  <FontAwesomeIcon icon={['fas', 'chevron-left']} width={14} color="#3294F8" />
                  <span>VOLTAR</span>
              </LinkItemConteiner>
            </Link>
            <LinkItemConteiner>
              <span>VER NO GITHUB</span>
              <FontAwesomeIcon icon={['fas', 'arrow-up-right-from-square']} width={14} color="#3294F8" />
            </LinkItemConteiner>
          
          </LinksContainer>

          <PostHeaderTitle>
            <h1>JavaScript data types and data structures</h1> 
          </PostHeaderTitle>

          <PostFooterContainer>
            <PostHeaderItemContainer>
              <FontAwesomeIcon icon={['fab', 'github']} width={18} color="#3A536B" />
              <span>alvinho.orlando</span>
            </PostHeaderItemContainer>
            <PostHeaderItemContainer>
              <FontAwesomeIcon icon={['fas', 'calendar-day']} width={18} color="#3A536B" />
              <span>Há 1 dia</span>
            </PostHeaderItemContainer>
            <PostHeaderItemContainer>
              <FontAwesomeIcon icon={['fas', 'comment']} width={18} color="#3A536B" />
              <span>5 comentários</span>
            </PostHeaderItemContainer>
          </PostFooterContainer>
         
        </PostHeaderContainer>

        <PostMainContainer>
            <TextMainContainer>
                <p>
                  Programming languages all have built-in data structures, but these often differ from one language
                  to another. This article attempts to list the built-in data structures available in JavaScript and
                  what properties they have. These can be used to build other data structures. Wherever possible,
                  comparisons with other languages are drawn.
                </p>
                
                <h1>Dynamic typing</h1>
                <p>
                  JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly
                  associated with any particular value type, and any variable can be assigned (and re-assigned)
                  values of all types:
                </p>
            </TextMainContainer>
           <CodeContainer>
            <p>let foo = 42;  &nbsp;&nbsp;&nbsp; //foo is now a number</p>
            <p>foo = 'bar';&nbsp;&nbsp;&nbsp; //foo is now a string</p>
            <p>foo = true; &nbsp;&nbsp;&nbsp; //foo is now a boolean</p>
           </CodeContainer>
        </PostMainContainer>
      </PostContainer>
    )
}

{/* <h1>JavaScript data types and data structures</h1> */}