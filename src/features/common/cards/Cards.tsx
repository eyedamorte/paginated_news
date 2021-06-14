import React, { FC } from 'react'
import { List } from 'antd'
import { NewsStateType, ArticleType } from '../../news/newsTypes'
import ListItem from './ListItem'

interface CustomCardPropsType {
    list: NewsStateType
}

const CustomCards : FC<CustomCardPropsType> = ({list}) => {

    return(
        <List
            itemLayout="vertical"
            size="large"
            pagination={{
            onChange: page => {
                console.log(page);
            },
            pageSize: 3,
            }}
            dataSource={list}
            
            renderItem={item => (
                <ListItem item={item}/>
            )}
        />
    )
    
}

export default CustomCards