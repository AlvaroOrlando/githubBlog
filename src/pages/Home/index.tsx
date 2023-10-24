import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import '../../fontawesome';


import { 
    ArrowUpRightContainer,
    AvatarContainer, 
    CardsMainContainer, 
    HomeContainer, 
    ProfileContainer, 
    ProfileFooter, 
    ProfileHeader, 
    ProfileItemContainer, 
    ProfileTextContainer, 
    SearchContainer,
    SearchHeader,
    SearchInput
} from "./styles";

import { Card } from './components/card';

import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const username = 'AlvaroOrlando'
const repo = 'DT-Money'

interface dataProps {
  name:string
  bio:string
  login:string
  company:string
  followers:string
  avatar_url:string
}

export interface issueProps {
  title: string
  body: string
  html_url:string
  comments:number
  created_at: string
  number:number
  id:number
}



export function Home(){
 

  function handleSubmit(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault()
      fetchIssue(busca)
  }

  function handleChange(e: React.FormEvent<HTMLInputElement>){
    setBusca(e.currentTarget.value)
  }


  const [userData, setUserData] = useState<dataProps>({
    name:'',
    bio:'',
    login:'',
    company:'',
    followers:'',
    avatar_url:'',
  });

  const [issues, setIssues] = useState<issueProps[]>([])
  const [busca, setBusca] = useState('')


  async function fetchIssue(busca:string){
    const url = new URL(`https://api.github.com/search/issues?q=${busca}%20repo:${username}/${repo}`)
    const { data: response } = await axios.get(url.href)
    setIssues(response.items)
  }

  
  async function fetchAllIssues(){
    const url = new URL(`http://api.github.com/repos/${username}/${repo}/issues`)
    const { data: response } = await axios.get(url.href)
    setIssues(response);
  }


  const fetchUserData = async () => {
    const url = new URL(`http://api.github.com/users/${username}`)
    const { data: response } = await axios.get(url.href)
    setUserData(response);
  };

  

  useEffect(() => {
    fetchAllIssues();
  }, []); 
  
  useEffect(() => {
    fetchUserData();
  },[]);

    return (
        <HomeContainer>
          <ProfileContainer>
            <AvatarContainer>
                <img src={userData.avatar_url} alt="" />
            </AvatarContainer>
            
            <ProfileTextContainer>
              <ProfileHeader>
                <h1>{userData.name}</h1>
                <p>
                    {userData.bio}
                </p>
              </ProfileHeader>
              <ProfileFooter>
                <ProfileItemContainer>
                  <FontAwesomeIcon icon={['fab', 'github']} width={18} color="#3A536B" />
                  <span>{userData.login}</span>
                </ProfileItemContainer>
                {userData.company ? <ProfileItemContainer>
                  <FontAwesomeIcon icon={['fas', 'building']} width={18} color="#3A536B" />
                  <span>{userData.company}</span>
                </ProfileItemContainer> : null}
                
                  
                <ProfileItemContainer>
                  <FontAwesomeIcon icon={['fas', 'user-group']} width={18} color="#3A536B" />
                  <span>{userData.followers} seguidores</span>
                </ProfileItemContainer>
              </ProfileFooter>
            </ProfileTextContainer>

            <Link to={`http://github.com/${username}`}>
              <ArrowUpRightContainer>
                  <span>GITHUB</span>
                  <FontAwesomeIcon icon={['fas','arrow-up-right-from-square']} width={11.25} color='#3294F8'/>
              </ArrowUpRightContainer>
            </Link>
           
          </ProfileContainer>

          <SearchContainer>
            <form style={{'width': '100%'}} onSubmit={handleSubmit}>
              <SearchHeader>
                <p>Publicações</p>
                <span>{issues.length} publicações</span>
              </SearchHeader>
              <SearchInput
                type="text"
                placeholder='Buscar conteúdo' 
                name="search"
                onChange={handleChange}
                value={busca}
               
              />
            </form>
          </SearchContainer>

          <CardsMainContainer>
            {issues.map(issue =>{
              const uniqueKey = `issue_${issue.number}`;
              return (
               
                <Card 
                  key={uniqueKey}
                  title={issue.title}
                  body={issue.body}
                  html_url={issue.html_url}
                  comments={issue.comments}
                  created_at={issue.created_at}
                  id={issue.number} 
                />
              )
            })}
            
          </CardsMainContainer>
          
        </HomeContainer>
    )
}