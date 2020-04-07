import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';

import './LayoutBasic.scss'

export default function LayoutBasic(props) {

    const { routes } = props;
    const { Header, Content, Footer } = Layout;

    return (
        <Layout>
            <h2>Menu ...</h2>
            <Layout>
                <Header>Header ...</Header>
                <Content>
                    <LoadRoutes routes={routes} />
                </Content>
                <Footer>Juan Fernando Restrepo</Footer>
            </Layout>
        </Layout>
    );
};

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
};
