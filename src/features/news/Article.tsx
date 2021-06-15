import React, { useEffect, useState} from 'react';
import type { FC } from 'react'
import { ArticleType } from './newsTypes'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getNewsList } from './newsSelector'

interface ArticlePageParams {
    id: string
}

const Article : FC = () => {

    const newsList = useSelector(getNewsList)  
    const [article, setArticle] = useState<ArticleType | null | undefined>(null)
    const params = useParams<ArticlePageParams>()
    
    useEffect( () => {
        setArticle(newsList.find( (article) => { return String(article.id) === params.id }))
    }, [])

    return(
        <div>
            <h2>{article?.title}</h2>
            <p>{article?.description}</p>
            <p>{article?.content}</p>
        </div>
    )
    
}

export default Article