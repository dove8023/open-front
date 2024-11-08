import React, { useState } from 'react'
import { Button, Layout, theme } from 'antd';
const { Header } = Layout;
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons';
import AvatarBox from './AvatarBox';

interface ComponentProps {
  getCollapsed: (collapsed: boolean) => void;
}
const HeaderBox: React.FC<ComponentProps> = ({ getCollapsed }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [collapsed, setCollapsed] = useState(false);
  getCollapsed(collapsed)

  return (
    <Header style={{ padding: '0 40px 0 0', background: colorBgContainer, display: 'Flex', justifyContent: 'space-between' }}>
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!collapsed)}
        style={{
          fontSize: '16px',
          width: 64,
          height: 64,
        }}
      />
      <AvatarBox />
    </Header>
  );
};

export default HeaderBox;

