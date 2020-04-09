import React from 'react';
import { Button } from 'antd';
import { MenuFoldOutlined, PoweroffOutlined } from '@ant-design/icons';
import Logo from '../../../assets/img/png/original.png';

import './MenuTop.scss';


export default function MenuTop() {
    return (
        <div className='menu-top'>
            <div className='menu-top__left'>
                <img
                    className='menu-top__left-logo'
                    src={ Logo }
                    alt='Juan Fernando Restrepo Moreno'
                />
                <Button 
                    type='link' 
                    onClick={() => console.log('CLICK MENU TOP')} 
                >
                    <MenuFoldOutlined /> 
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