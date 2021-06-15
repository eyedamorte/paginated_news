import React, { useCallback } from 'react';
import type { FC } from 'react';

import CustomInput from '../common/input/Input'
import { useSelector, useDispatch } from 'react-redux'
import { updateSearch } from './FiltersSlice'
import { getSearchValue } from './filtersSelector'
import { Button } from 'antd';
import { useEffect } from 'react';
import { getIsPending } from '../news/newsSelector';
import { getNewsThunk } from '../news/NewsSlice'


const Filters : FC = () => {
    const SearchValue = useSelector(getSearchValue)
    const isPending = useSelector(getIsPending)

    const dispatch = useDispatch()

    const SearchInputOnChange = (e: React.FormEvent<HTMLInputElement>) =>{
        dispatch(updateSearch(e.currentTarget.value))
    }

    const getNews = useCallback((params) => {
        dispatch(getNewsThunk(params))
    }, [])

    useEffect(() => {
        getNews({ q: 'anime' })
    }, [])

    const submit = useCallback(() =>{
        getNews({q: SearchValue})
    }, [SearchValue])

    return(
        <div style={{ padding: 10 }}>
            <CustomInput style={{margin: '0 0 20px 0'}} onChange={SearchInputOnChange}/>
            <Button type="primary" block disabled={isPending} onClick={submit}>Search</Button>
        </div>
    )
    
}

export default Filters