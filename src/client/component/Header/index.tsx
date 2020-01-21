import React from 'react'
import './style.less'
import { hot } from 'react-hot-loader'
import { Menu, Dropdown, Icon } from 'antd'

const menu = (
    <Menu>
        <Menu.Item key="0">
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        1st menu item
            </a>
        </Menu.Item>
        <Menu.Item key="1">
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        2nd menu item
            </a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3" disabled>
      3rd menu item（disabled）
        </Menu.Item>
    </Menu>
)

@hot(module)
class Header extends React.Component{
    state = {

    }
    render() {
        return (
            <header className="navbar">
                <div className="blog-name">
                Mr.shu
                </div>
                <div className="navbar-content">
                    <div className="navbar-content-item">
                        <Dropdown overlay={menu}>
                            <a className="ant-dropdown-link" href="#">
                      Hover me <Icon type="down" />
                            </a>
                        </Dropdown>
                    </div>
                    <div className="navbar-content-item">
                        <Dropdown overlay={menu}>
                            <a className="ant-dropdown-link" href="#">
                      Hover me <Icon type="down" />
                            </a>
                        </Dropdown>
                    </div>
                    <div className="navbar-content-item">
                        <Dropdown overlay={menu}>
                            <a className="ant-dropdown-link" href="#">
                      Hover me <Icon type="down" />
                            </a>
                        </Dropdown>
                    </div>
                </div>
            </header>
        )
    }
}


export default Header
