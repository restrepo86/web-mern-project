import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';

import './LayoutAdmin.scss';

export default function LayoutAdmin(props) {

    const { routes } = props;
    const { Header, Content, Footer } = Layout;

    return (
        <Layout>
            {/**TODO: Menu Sider */}
            <Layout className='layoutAdmin'>
                <Header className='layout-admin__header'>
                    {/**TODO: Menu Top */}
                </Header>
                <Content className='layout-admin__content'>
                    <LoadRoutes routes={routes} />
                </Content>
                <Footer className='layout-admin__footer'>Juan Fernando Restrepo</Footer>
            </Layout>
        </Layout>
    );
}

function LoadRoutes({ routes }) {
    
    return (
        <Switch>
            {
                routes.map((route, index) => (
                    <Route 
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.component}
                    />
                )) 
            }
        </Switch>
    );

}
