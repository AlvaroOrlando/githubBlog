import { CardContainer } from "./styles";

import { limitText, capitalizeFirstWord, useFormattedDate } from "../../../../utilities/index"

import { Link } from "react-router-dom";
import Markdown from "react-markdown";


interface issueProps {
    title: string
    body: string
    html_url:string
    comments:number
    created_at:string
    id:number
}

export function Card({
    
     body, created_at, id
}:issueProps){

    

    const formattedDate: string = useFormattedDate(created_at) || "";
    const markdownText = limitText(body, 260);


    return (
        <CardContainer>
            <Link to={`/post/${id}`}>
                <section>
                   <Markdown>{markdownText}</Markdown>
                </section>
            </Link>

            <section>
                <span>{capitalizeFirstWord(formattedDate)}</span>
            </section>
        </CardContainer>
    )
}