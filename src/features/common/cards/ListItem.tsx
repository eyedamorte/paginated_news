import React, { FC } from 'react';
import { List, Avatar } from 'antd';
import { ArticleType } from '../../news/newsTypes'

interface ListItemPropsType {
    item: ArticleType
}

const Card : FC<ListItemPropsType> = ({item}) => {

    return(
        <List.Item
            key={item.id}
            extra={
            <img
                width={272}
                alt="logo"
                src={item.urlToImage}
            />
            }
        >
        <List.Item.Meta
            title={<a href={item.title}>{item.title}</a>}
            description={item.description}
            />
            {item.content}
        </List.Item>
    )
    
}

export default Card