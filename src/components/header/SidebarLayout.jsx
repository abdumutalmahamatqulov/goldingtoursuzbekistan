import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import { Layout, Menu, Button } from "antd";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    BarChartOutlined,
    ShopOutlined,
    UserOutlined,
    TeamOutlined,
    LogoutOutlined,
    InboxOutlined,
} from "@ant-design/icons";
import React, { useState, useEffect } from "react";

const { Sider, Header, Content } = Layout;

const menuItems = [
    { path: "/statistika", icon: <BarChartOutlined style={{ fontSize: 20 }} />, label: "Statistika" },
    { path: "/ombor", icon: <ShopOutlined style={{ fontSize: 20 }} />, label: "Ombor" },
    { path: "/magazinlar", icon: <UserOutlined style={{ fontSize: 20 }} />, label: "Magazinlar" },
    { path: "/hodimlar", icon: <TeamOutlined style={{ fontSize: 20 }} />, label: "Hodimlar" },
    { path: "/tayormaxsulotlar", icon: <InboxOutlined style={{ fontSize: 20 }} />, label: "Tayor mahsulotlar" },
];

const SidebarLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = () => {
        navigate("/login");
    };

    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Sider trigger={null} collapsible collapsed={collapsed} style={{ background: '#1b3154', padding: "0 10px" }} width={300}>
                <div style={{width:"100%",display: "flex", justifyContent: "center"}}>

                    <div style={{ display: "flex", justifyContent: "center", padding: "15px 10px 10px 20px", maxWidth: "100px" }}>
                        {/* <img src={logo} alt="NASHSAD logo" style={{ height: "auto", width: "100%" }} /> */}
                    </div>
                </div>
                <Menu style={{ background: '#1b3154', width: '100%' }} mode="inline" selectedKeys={[location.pathname]}>
                    {menuItems.map((item) => (
                        <Menu.Item key={item.path} icon={item.icon} style={{ color: '#fff', padding: '15px 20px', fontSize: "20px" }}>
                            <Link to={item.path} style={{ color: '#fff', fontSize: "20px" }}>{item.label}</Link>
                        </Menu.Item>
                    ))}
                    <Menu.Item key="logout" icon={<LogoutOutlined style={{ fontSize: "20px" }} />} onClick={handleLogout} style={{ color: '#fff', fontSize: "20px" }}>
                        Chiqish
                    </Menu.Item>
                </Menu>
            </Sider>

            {/* 🌟 Asosiy UI qismi */}
            <Layout>
                <Header
                    style={{
                        padding: "50px 16px",
                        background: "#fff",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.1)",
                    }}
                >
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{ fontSize: "24px" }}
                    />
                    <Button type="primary" onClick={handleLogout} icon={<LogoutOutlined />} style={{ background: '#1b3154', fontSize: "20px", padding: "25px" }}>
                        Chiqish
                    </Button>
                </Header>

                <Content style={{ margin: "16px", padding: "16px", background: "#fff", borderRadius: "8px" }}>
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};

export default SidebarLayout;
