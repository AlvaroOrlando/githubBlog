
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

const username = 'ALvaroOrlando'
const repo = 'githubBlog'

interface dataProps {
  name:string
  bio:string
  login:string
  company:string
  followers:string
  avatar_url:string
}

interface issueProps {
  node_id:string
}



export function Home(){


  function handleSubmit(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault()
      fetchRepo(busca)
  }

  function handleChange(e: React.FormEvent<HTMLInputElement>){
    setBusca(e.currentTarget.value)
  }


  const [data, setData] = useState<dataProps>({
    name:'',
    bio:'',
    login:'',
    company:'',
    followers:'',
    avatar_url:'',
  });

  const [issues, setIssues] = useState<issueProps[]>([])
  const [busca, setBusca] = useState('')


  const fetchData = async ()=>{
    const { data: response } = await axios.get(`http://api.github.com/users/${username}`)
    setData(response)
    // console.log(response);
  }

  // const followersData = async ()=>{
  //   const { data: response } = await axios.get(`https://api.github.com/users/${username}/followers`)
  //   console.log(response);
  // }

  // followersData()
  
  useEffect(()=>{
    fetchData()
  },[])

  async function fetchRepo(busca:string){
    const url = new URL(`https://api.github.com/search/issues?q=${busca}%20repo:${username}/${repo}`)
    const { data: response } = await axios.get(url.href)
    setIssues(response.items)
  }


    return (
        <HomeContainer>
          <ProfileContainer>
            <AvatarContainer>
                <img src={data.avatar_url} alt="" />
            </AvatarContainer>
            
            <ProfileTextContainer>
              <ProfileHeader>
                <h1>{data.name}</h1>
                <p>
                    {data.bio}
                </p>
              </ProfileHeader>
              <ProfileFooter>
                <ProfileItemContainer>
                  <FontAwesomeIcon icon={['fab', 'github']} width={18} color="#3A536B" />
                  <span>{data.login}</span>
                </ProfileItemContainer>
                {data.company ? <ProfileItemContainer>
                  <FontAwesomeIcon icon={['fas', 'building']} width={18} color="#3A536B" />
                  <span>{data.company}</span>
                </ProfileItemContainer> : null}
                
                  
                <ProfileItemContainer>
                  <FontAwesomeIcon icon={['fas', 'user-group']} width={18} color="#3A536B" />
                  <span>{data.followers} seguidores</span>
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
                  <span>6 publicações</span>
                </SearchHeader>
                <SearchInput
                  type="text"
                placeholder='Buscar conteúdo' 
                name="search"
                  onChange={handleChange}
                />
              </form>
            </SearchContainer>

          <CardsMainContainer>
            {issues.map(issue =>{
              return (
                <Card key={issue.node_id} />
              )
            })}
            
          </CardsMainContainer>
          
        </HomeContainer>
    )
}