import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import 'antd/dist/antd.min.css';
import { Content, Footer, Header } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';

export interface MainLayoutProps {}

export function MainLayout(props: MainLayoutProps) {
  return (
    <Layout
      style={{
        width: '100%',
        minHeight: '100vh',
      }}
    >
      <Header
        className="site-layout-sub-header-background"
        style={{ backgroundColor: 'aqua', padding: 0, height: 60 }}
      ></Header>

      <Layout style={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
        <Sider breakpoint="md" collapsible theme="dark" width="250px" collapsedWidth="60px">
          Sider
        </Sider>
        <Layout>
          <Content>
            <Outlet />
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    </Layout>
  );
}
