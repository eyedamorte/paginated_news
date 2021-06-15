import React, { FC } from 'react';
import CustomInput from '../common/input/Input'
import { useSelector, useDispatch } from 'react-redux'
import { updateSearch } from './FiltersSlice'
import { getSearchValue } from './filtersSelector'
import { Button } from 'antd';
import axios from "axios";
import { useEffect } from 'react';

import { getNewsThunk } from '../news/NewsSlice'


const Filters : FC = () => {
    const SearchValue = useSelector(getSearchValue)
    const dispatch = useDispatch()

    const SearchInputOnChange = (e: React.FormEvent<HTMLInputElement>) =>{
        dispatch(updateSearch(e.currentTarget.value))
    }

    useEffect(() => {
        dispatch(getNewsThunk({
            q: 'tesla',
            sortBy: 'publishedAt',
            apiKey: 'eed81886b1b8427d8f75b1aec5837517'
        }))
    }, [])

    const submit = () =>{
        
    }

    return(
        <div>
            <CustomInput onChange={SearchInputOnChange}/>
            {SearchValue}
            <Button type="primary" block onClick={submit}>Search</Button>
        </div>
    )
    
}

export default Filters