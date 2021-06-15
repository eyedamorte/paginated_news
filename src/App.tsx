import React from 'react'
import Customlayout from './features/layout/Layout'
import Filters from './features/filters/Filters'
import CustomCards from './features/common/cards/Cards'
import { useSelector } from 'react-redux'
import { getNewsList } from './features/news/newsSelector'
import { Row, Col } from 'antd';


export default function App() {

  const newsList = useSelector(getNewsList)  

  return (
      <Customlayout>
        <Row>
          <Col span={6}>
            <Filters/>
          </Col>
          <Col span={12}>
            <CustomCards list={newsList} />
          </Col>
        </Row>
      </Customlayout>
  )
}

