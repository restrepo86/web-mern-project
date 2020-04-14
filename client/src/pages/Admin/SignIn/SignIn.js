import React from 'react';
import { Layout, Tabs } from 'antd';
import { Redirect } from 'react-router-dom';
import Logo from '../../../assets/img/png/original.png'; 
import RegisterForm from '../../../components/Admin/RegisterForm';

import './SignIn.scss';

export default function SignIn() {
    const { Content } = Layout;
    const { TabPane } = Tabs;
    return (
        <Layout className='sign-in'>
            <Content className='sign-in__content'>
                <h1 className='sign-in__content-logo'>
                    <img src={ Logo } alt='Agustin Navarro Galdon' />
                </h1>
                <div className='sign-in__content-tabs'>
                    <Tabs type='card'>
                        <TabPane key = '1' tab = { <span>Entrar</span> }>
                            Componente LoginForm
                        </TabPane>
                        <TabPane key = '2' tab = { <span>Nuevo Usuario</span> }>
                            <RegisterForm />
                        </TabPane>
                    </Tabs>
                </div>
            </Content>
        </Layout>
    );
};