import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'antd/dist/antd.css'
import Customlayout from './features/layout/Layout'
import Filters from './features/filters/Filters'
import CustomCards from './features/common/cards/Cards'
import { useSelector, useDispatch } from 'react-redux'
import { getNewsList } from './features/news/newsSelector'


export default function App() {

  const newsList = useSelector(getNewsList)

  return (
      <Customlayout>
        <div className="row">
          <div className="col-md-3">
            <Filters/>
            </div>
          <div className="col-md-9">
            <CustomCards list={newsList} />
          </div>
        </div>
      </Customlayout>
  )
}

