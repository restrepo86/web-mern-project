import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { MenuFoldOutlined, MenuUnfoldOutlined, PoweroffOutlined } from '@ant-design/icons';
import Logo from '../../../assets/img/png/original.png';

import './MenuTop.scss';


export default function MenuTop(props) {
    const { menuCollapsed, setMenuCollapsed } = props;
    
    return (
        <div className='menu-top'>
            <div className='menu-top__left'>
                <Link to = '/admin'>
                    <img
                        className='menu-top__left-logo'
                        src={ Logo }
                        alt='Juan Fernando Restrepo Moreno'
                    />
                </Link>
                <Button 
                    type='link' 
                    onClick={() => setMenuCollapsed(!menuCollapsed)} 
                >
                    { menuCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined /> }
                    
                </Button>
            </div>
            <div className='menu-top__right'>
                <Button 
                    type='link' 
                    onClick={() => console.log('CLICK POWER OFF')}
                >
                    <PoweroffOutlined />
                </Button>
            </div>
        </div>
    );
};