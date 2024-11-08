import React, { useState } from 'react'
import { Checkbox, TabBar, Badge } from 'antd-mobile'
import {
    RightOutline, AppOutline,
    MessageOutline,
    MessageFill,
    UnorderedListOutline,
    UserOutline,
} from 'antd-mobile-icons'
let dishList = [
    {
        checkedValue: false,
        title: '阿蒙家的饭',
        price: '39.9',
        desc: '香辣牛肉粉香辣入骨香爆外焦里嫩',
        originPrice: '59',
        sum: '1',
        key: 1,
    },
    {
        checkedValue: false,
        title: '美味一品香',
        price: '42',
        desc: '香辣牛肉粉香辣入骨香爆外焦里嫩',
        originPrice: '78',
        sum: '1',
        key: 2,
    },
    {
        checkedValue: false,
        title: '美味一品香',
        price: '42',
        desc: '香辣牛肉粉香辣入骨香爆外焦里嫩',
        originPrice: '78',
        sum: '1',
        key: 3,
    },
    {
        checkedValue: false,
        title: '美味一品香',
        price: '42',
        desc: '香辣牛肉粉香辣入骨香爆外焦里嫩',
        originPrice: '78',
        sum: '1',
        key: 5,
    },
]
const checkedStyle = {
    '--icon-size': '18px',
    '--font-size': '14px',
    '--gap': '6px',
}

const Header = () => {
    return (
        <div className="bgColor">
            <span></span>
            <span>购物车</span>
            <span>编辑</span>
        </div>
    )
}
const ItemBox = ({ value, onChange }) => {
    return (
        <div>
            <div className='nameLine'>
                <div>
                    <Checkbox checked={value.checkedValue} onChange={onChange} style={checkedStyle}>{value.title}</Checkbox>
                    <RightOutline />
                </div>
                <span>领券</span>
            </div>
            <div className='dish'>
                <Checkbox checked={value.checkedValue} onChange={onChange} style={checkedStyle}></Checkbox>
                <div className='img'></div>
                <div className='info'>
                    <div>{value.desc}</div>
                    <div className='tag'>
                        <span>新品上新</span>
                    </div>
                    <div className='price'>
                        <div>
                            <span>{value.price}</span>
                            <span>{value.originPrice}</span>
                        </div>
                        <span>x{value.sum}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
const Bottom = ({ checkedAllValue, CheckedAll, sumPrice,sum }) => {
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
    const [activeKey, setActiveKey] = useState('message')
    return (
        <div className='bottom'>
            <Actions checkedAllValue={checkedAllValue} CheckedAll={CheckedAll} sumPrice={sumPrice} sum={sum}></Actions>
            {/* <TabBar activeKey={activeKey} onChange={setActiveKey}>
                {tabs.map(item => (
                    <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
                ))}
            </TabBar> */}
        </div>

    )
}

const Actions = ({ CheckedAll, checkedAllValue, sumPrice,sum }) => {
    return (
        <div className='actions'>
            <Checkbox checked={checkedAllValue} onChange={CheckedAll} style={checkedStyle}>全选</Checkbox>
            <div>
                <span>合计：￥{sumPrice}</span>
                <span>结算（{sum}）</span>
            </div>
        </div>
    )
}

const whole = () => {
    const [dishes, setDishes] = useState(dishList)
    const [checkedAllValue, CheckedAll] = useState(false);
    const sumPrice = dishes.reduce((a,b)=>a+(b.checkedValue?Number(b.price):0),0);
    const sum = dishes.reduce((a,b)=>a+(b.checkedValue?1:0),0);
    const onChange = (key) => {
        const newDishes = dishes.map(i => {
            if (i.key == key) {
                return {
                    ...i,
                    checkedValue: !i.checkedValue
                }
            } else {
                return i
            }
        })
        let checked = !newDishes.some(i => i.checkedValue == false)
        CheckedAll(checked);
        setDishes(newDishes);
    }
    const handleChecked = () => {
        let flag = !checkedAllValue
        const newDishes = dishes.map(i => {
            return {
                ...i,
                checkedValue: flag
            }
        })
        setDishes(newDishes);
        if (checkedAllValue) {
            CheckedAll(false);
        } else {
            CheckedAll(true);
        }
    }
    return (
        <div className='whole'>
            <Header></Header>
            <div className='content'>
                {
                    dishes.length ? dishes.map((i) => {
                        return (
                            <ItemBox key={i.key} value={i} onChange={() => onChange(i.key)}></ItemBox>
                        )
                    }) : ''
                }
            </div>
            <Bottom checkedAllValue={checkedAllValue} CheckedAll={handleChecked} sumPrice={sumPrice} sum={sum}></Bottom>
        </div>
    )
}

export default whole