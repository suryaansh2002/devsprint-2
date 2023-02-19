import React,{useEffect, useState} from 'react'
import './Bookmarked.css'
import logo from '../../assets/logo.png'
export default function Bookmarked() {
    const [articles,setArticles]=useState([])
    useEffect(()=>{
        var a=JSON.parse(localStorage.getItem('bookmarked'))
        console.log(a)
        var b=[]
        a.map((s)=>(b.push(JSON.parse(s))))
        console.log(b)

        setArticles(b)
    },[ ])
  return (
    <div className='b-container'>
            <div>Bookmarked Posts</div>
    {articles && articles.map((item)=><>
        <div className='news-card'>
                        <div className='news-imBox'>
                            <img src={item.urlToImage} className='news-img'
                                onError={({ currentTarget }) => {
                                    currentTarget.onerror = null; // prevents looping
                                    currentTarget.src = logo;

                                }}

                            />
                        </div>
                        <div className='news-title'>{item.title}</div>
                        {item.content && <div className='content-ar'>{item.content.slice(-6) == 'chars]' ? item.content.slice(0, -14) : item.content}</div>}
                        
                    </div>


    </>)}
    </div>
  )
}
