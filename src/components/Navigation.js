import React from 'react';
import {Menu} from "antd";
import {Link} from "react-router-dom";
import {Routes} from "../constants/routes";

const Navigation = (props) => (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">
            <Link to={Routes.HOME}>Inicio</Link>
        </Menu.Item>
        <Menu.Item key="2">
            <Link to={Routes.MOVIES}>Movies</Link>
        </Menu.Item>
        <Menu.Item key="3">
            <Link to={Routes.ABOUT}>Acerca de </Link>
        </Menu.Item>
        <Menu.Item key="3">
            <Link to='/notfound'>No existe </Link>
        </Menu.Item>
    </Menu>
);

export default Navigation;