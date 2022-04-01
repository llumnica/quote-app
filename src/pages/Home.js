import axios from 'axios';
import React,{useState,useEffect} from 'react'
import QuotesItem from '../components/QuotesItem/QuotesItem';

export default function Home() {

    const [quotesList, setQuotesList] = useState([]);
    
    const config = {
        headers: { 'Authorization': 'Bearer 20f63fed3e1e7cca24224174cffb0a2d'}
    };

    useEffect(()=>{
        axios.get('https://favqs.com/api/quotes',config).then((res)=>{
            setQuotesList(res.data.quotes)
        }).catch((e)=>{
            console.log(e);
        })
    },[])


  return (
    <div style={{marginTop: 50}}>
        <QuotesItem data={quotesList}/>
    </div>
  )
}
