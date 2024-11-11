import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Checkbox, TabBar, Badge } from 'antd-mobile'
import {
    AppOutline,
    MessageOutline,
    MessageFill,
    UnorderedListOutline,
    UserOutline,
} from 'antd-mobile-icons'
const BottomNav = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    const tabs = [
        {
            key: 'home',
            title: '首页',
            icon: <AppOutline />,
            badge: Badge.dot,
        },
        {
            key: 'todo',
            title: '发现',
            icon: <UnorderedListOutline />,
            badge: '5',
        },
        {
            key: 'message',
            title: '购物车',
            icon: (active) =>
                active ? <MessageFill /> : <MessageOutline />,
            badge: '99+',
        },
        {
            key: 'personalCenter',
            title: '我的',
            icon: <UserOutline />,
        },
    ]
    return (
        <div style={styles.navContainer}>
            {/* <TabBar activeKey={activeKey} onChange={setActiveKey}>
                {tabs.map(item => (
                    <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
                ))}
            </TabBar> */}
            <Link to="/home" style={currentPath === '/home' ? styles.activeLink : styles.link}>首页</Link>
            <Link to="/about" style={currentPath === '/about' ? styles.activeLink : styles.link}>关于</Link>
            <Link to="/shoppingcart" style={currentPath === '/shoppingcart' ? styles.activeLink : styles.link}>购物车</Link>
            <Link to="/profile" style={currentPath === '/profile' ? styles.activeLink : styles.link}>个人中心</Link>
        </div>
    )
}
const styles = {
    navContainer: {
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        height: '50px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#f1f1f1',
        borderTop: '1px solid #ddd',
    },
    link: {
        textDecoration: 'none',
        color: '#666',
        fontSize: '16px',
    },
    activeLink: {
        textDecoration: 'none',
        color: '#007bff',
        fontSize: '16px',
    },
};
export default BottomNav;