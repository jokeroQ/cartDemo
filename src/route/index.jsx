// 导入创建路由的函数
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home/Home';
import About from '../pages/about/about';
import Profile from '../pages/profile/profile';
import ShoppingCart from '../pages/shopping-cart/ShoppingCart';
import GameTest from '../pages/gameTest/GameTest';
import App from '../App';
// 创建router路由实例对象，并配置路由对应关系（路由数组）
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
          {
            path: 'about',
            element: <About />
          },
          {
            path: 'profile',
            element: <Profile />
          },
          {
            path: 'home',
            element: <Home />
          },
          {
            path: 'shoppingcart',
            element: <ShoppingCart />
          }, {
            path: 'gameTest',
            element: <GameTest />
          },
        ]
      },
     
]);

export default router;
