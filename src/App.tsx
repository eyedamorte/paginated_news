import React from 'react'
import Customlayout from './features/layout/Layout'
import Filters from './features/filters/Filters'
import CustomCards from './features/common/cards/Cards'
import { useSelector } from 'react-redux'
import { getNewsList } from './features/news/newsSelector'
import { Row, Col } from 'antd';
import { BrowserRouter,  Route, Redirect } from 'react-router-dom'
import Article from './features/news/Article'

export default function App() {

  const newsList = useSelector(getNewsList)  

  return (
    <BrowserRouter>
      <Customlayout>
          <div>
            <Route path={'/news'} exact>
              <Row>
                <Col span={6}>
                  <Filters/>
                </Col>
                <Col span={12}>
                  <CustomCards list={newsList} />
                </Col>
              </Row>
            </Route>
            <Route exact path="/">
              <Redirect to="/news" />
          </Route>
            <Route path={'/article/:id'}>
              <Article />
            </Route>
          </div>
          
      </Customlayout>
    </BrowserRouter>
  )
}

