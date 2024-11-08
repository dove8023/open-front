import { useState } from 'react'

import { Layout } from 'antd';
import SiderBox from '../components/homePage/SiderBox';
import HeaderBox from '../components/homePage/HeaderBox';
import ContentBox from '../components/homePage/ContentBox';

function Home() {
  const [collapsed, setCollapsed] = useState(false);
  const getCollapsed = (collapsed: boolean) => {
    setCollapsed(collapsed)
  }

  return (
    <>
      <Layout style={{ minHeight: '100vh' }}>
        <SiderBox isCollapsed={collapsed} />
        <Layout>
          <HeaderBox getCollapsed={getCollapsed} />
          <ContentBox />
        </Layout>
      </Layout>
    </>
  )
}

export default Home
