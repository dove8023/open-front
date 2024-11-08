import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, matchPath } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  OrderedListOutlined,
  PieChartOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import Logo from "./Logo";

const { Sider } = Layout;

interface SiderBoxProps {
  isCollapsed: boolean;
}
const SiderBox: React.FC<SiderBoxProps> = ({ isCollapsed }) => {
  const [selectedKey, setSelectedKey] = useState([""]);

  const navigate = useNavigate();
  const location = useLocation();
  const items = [
    {
      key: "/",
      icon: <PieChartOutlined />,
      label: "homePage",
    },
    {
      key: "/bar",
      icon: <UserOutlined />,
      label: "柱状图",
    },
    {
      key: "/line",
      icon: <VideoCameraOutlined />,
      label: "折线图",
    },
    {
      key: "/pie",
      icon: <OrderedListOutlined />,
      label: "扇形图",
    },
    {
      key: "/gauge",
      icon: <OrderedListOutlined />,
      label: "仪表盘",
    },
    {
      key: "/line-data",
      icon: <VideoCameraOutlined />,
      label: "中国汽车总体销量",
    },
  ];

  useEffect(() => {
    let menuKeys = items.map((item) => item.key);
    let isMatchRes = menuKeys.find(function (key) {
      let isMatch = matchPath({ path: key, end: true }, location.pathname);
      if (isMatch) {
        return key;
      } else {
        return "";
      }
    });

    if (isMatchRes) {
      setSelectedKey([isMatchRes]);
    } else {
      navigate("/", { replace: true });
      setSelectedKey(["/"]);
    }
  }, [location.pathname]);

  return (
    <Sider trigger={null} collapsible collapsed={isCollapsed}>
      <div className="demo-logo-vertical" />
      <Logo isCollapsed={isCollapsed} />
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={selectedKey}
        items={items}
        onSelect={(values: any) => {
          navigate(values.key);
        }}
      />
    </Sider>
  );
};

export default SiderBox;
