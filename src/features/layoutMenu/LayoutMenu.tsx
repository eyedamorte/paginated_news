import React, { useState } from 'react';
import { Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;

export default function LayoutMenu({list}:any){
    return(
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              {list.map((element: any, index:number)=>{
                  return(<Menu.Item key={index}>{element.firstName}</Menu.Item>)
              })}
            </SubMenu>
        </Menu>
    )
}