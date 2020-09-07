import React, { useState } from "react";
import "antd/dist/antd.css";
import { Menu, Button } from "antd";
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  SwitcherOutlined,
  BarsOutlined,
  DesktopOutlined,
} from "@ant-design/icons";
import routes from "../routes/Routes";
import { Link } from "react-router-dom";
import "./Drawer.css";

const { SubMenu } = Menu;

const LocalDrawer = () => {
  const [collapsed, setClose] = useState(false);
  const toggleCollapsed = () => {
    setClose(!collapsed);
  };
  return (
    <div className="drawer">
      <Button
        type="dashed"
        onClick={() => toggleCollapsed()}
        style={{ marginBottom: 5 }}
      >
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
      </Button>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["0"]}
        mode="inline"
        inlineCollapsed={collapsed}
      >
        <Menu.Item key="0" icon={<DesktopOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <SubMenu key="sub1" icon={<SwitcherOutlined />} title="Sliders">
          {routes.map(
            (route, index) =>
              route.category === "Sliders" && (
                <Menu.Item key={index}>
                  <Link to={route.path}>{route.label}</Link>
                </Menu.Item>
              )
          )}
        </SubMenu>
        <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Cards">
          <Menu.Item key="1">Prototype 1</Menu.Item>
        </SubMenu>
        <SubMenu key="sub3" icon={<BarsOutlined />} title="Buttons">
          <Menu.Item key="1">
            <Link to="/comp">Components</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  );
};

export default LocalDrawer;
