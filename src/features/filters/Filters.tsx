import React, { useCallback } from 'react';
import type { FC } from 'react';
import CustomInput from '../common/input/Input'
import { useSelector, useDispatch } from 'react-redux'
import { updateSearch, updateHeadlinesMethod } from './FiltersSlice'
import { getSearchValue, getIsTopHeadlines } from './filtersSelector'
import { Button, Switch } from 'antd';
import { useEffect } from 'react';
import { getIsPending } from '../news/newsSelector';
import { getNewsThunk } from '../news/NewsSlice'


const Filters : FC = () => {
    const dispatch = useDispatch()

    const SearchValue = useSelector(getSearchValue)
    const isPending = useSelector(getIsPending)
    const isTopHeadlines = useSelector(getIsTopHeadlines)

    const SearchInputOnChange = (e: React.FormEvent<HTMLInputElement>) =>{
        dispatch(updateSearch(e.currentTarget.value))
    }

    const changeHeadlinesMethod = (checked: boolean) =>{
        dispatch(updateHeadlinesMethod(checked))
    }

    const getNews = useCallback((params) => {
        dispatch(getNewsThunk(params))
    }, [])

    useEffect(() => {
        getNews({ q: 'react' })
    }, [])

    const submit = useCallback(() =>{
        getNews({q: SearchValue})
    }, [SearchValue])

    return(
        <div style={{ padding: 10 }}>
            <div>
            {
                isTopHeadlines ? 
                <div>
                    <CustomInput style={{margin: '0 0 20px 0'}} placeholder='Search news' onChange={SearchInputOnChange}/>
                </div> 
                :
                 <div>
                     топ
                </div>
            }
            </div>
            <div style={{margin: '0 0 20px 0'}}>
                <Switch 
                    checkedChildren="All articles" 
                    unCheckedChildren="Top headlines" 
                    defaultChecked 
                    onChange={changeHeadlinesMethod}
                />
            </div>
            <Button type="primary" block disabled={isPending} onClick={submit}>Search</Button>
        </div>
    )
    
}

export default Filters