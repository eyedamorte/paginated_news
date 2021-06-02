import React, { useState, useCallback } from 'react';
import { Layout } from 'antd';
import LayoutMenu from '../layoutMenu/LayoutMenu';
import usersDataSet from '../../datasets/users';

const { Header, Content, Footer, Sider } = Layout;

export default function CustomLayout(){
    
    const [collapsed, setCollapsed] = useState(false);

    return(
        <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
          <div className="logo" />
          <LayoutMenu list={usersDataSet}/>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              Bill is a cat.
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Household chores tracker</Footer>
        </Layout>
      </Layout>
    )
    
}

