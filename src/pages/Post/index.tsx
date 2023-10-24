import { LinkItemConteiner, LinksContainer, PostContainer, PostFooterContainer, PostHeaderContainer, PostHeaderItemContainer, PostHeaderTitle, PostMainContainer, TextMainContainer } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import '../../fontawesome';
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useFormattedDate } from "../../utilities/index"
import Markdown from "react-markdown";



const username = 'AlvaroOrlando'
const repo = 'DT-Money'
interface User {
  login: string;
}

 interface issueProps {
  user: User;
  title: string
  body: string
  html_url:string 
  comments:number
  created_at: string
  number:number
  id:number
}

export function Post(){
  

  const [issue, setIssue] = useState<issueProps | null>(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchIssueById = async () => {
      try {
        const url = new URL(`http://api.github.com/repos/${username}/${repo}/issues/${id}`);
        const { data } = await axios.get(url.href);
        setIssue(data);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchIssueById();
  }, [id]);

  useEffect(()=>{
    console.log(issue);
  })

  const formattedDate = useFormattedDate(issue?.created_at);
  const markdownText = issue?.body
  
    return (
      <>

        {issue && 
        
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
              <Link to={issue.html_url}>VER NO GITHUB</Link>
              <FontAwesomeIcon icon={['fas', 'arrow-up-right-from-square']} width={14} color="#3294F8" />
              </LinkItemConteiner>
            
            </LinksContainer>

            <PostHeaderTitle>
              <h1>{issue.title}</h1> 
            </PostHeaderTitle>

            <PostFooterContainer>
              <PostHeaderItemContainer>
                <FontAwesomeIcon icon={['fab', 'github']} width={18} color="#3A536B" />
                
                <span>{issue.user && issue.user.login}</span>
              </PostHeaderItemContainer>
              <PostHeaderItemContainer>
                <FontAwesomeIcon icon={['fas', 'calendar-day']} width={18} color="#3A536B" />
                <span>{formattedDate}</span>
              </PostHeaderItemContainer>
              <PostHeaderItemContainer>
                <FontAwesomeIcon icon={['fas', 'comment']} width={18} color="#3A536B" />
                <span>{issue.comments} {issue.comments === 1 ? 'comentário' : 'comentários'}</span>
              </PostHeaderItemContainer>
            </PostFooterContainer>
          
          </PostHeaderContainer>

          <PostMainContainer>
              <TextMainContainer>
                <Markdown>{markdownText}</Markdown>
              </TextMainContainer>
            
          </PostMainContainer>
        </PostContainer>
        }
      </>
    )
}

{/* <h1>JavaScript data types and data structures</h1> */}