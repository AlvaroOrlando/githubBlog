import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useEffect, useState } from "react";

/* eslint-disable @typescript-eslint/no-unused-vars */
export function limitText(text:string, maxLength:number) {
    if (text.length <= maxLength) {
      return text;
    } else {
      
      return text.slice(0, maxLength - 3) + '...';
    }
  }

  export function capitalizeFirstWord(sentence: string): string {
    if (typeof sentence !== 'string' || sentence.length === 0) {
      return sentence;
    }
  
    const words = sentence.split(' '); 
    if (words.length > 0) {
      words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1); 
    }
  
    return words.join(' '); 
  }


  export function useFormattedDate(initialDate: string | undefined) {
    const [formattedDate, setFormattedDate] = useState<string | null>(null);
  
    useEffect(() => {
      if (initialDate) {
        const data = new Date(initialDate);
        const config = { addSuffix: true, locale: ptBR };
  
        const timeAgo = formatDistanceToNow(data, config);
        setFormattedDate(timeAgo);
      }
    }, [initialDate]);
  
    return formattedDate;
  }