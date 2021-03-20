# mini-react-router
react-router包含三个库：react-router, react-router-dom, react-router-native。 react-router提供基本的路由功能，实际使用的时候我们不会直接安装react-router，而是根据应用运行环境选择安装react-router-dom（在浏览器中使用）或者react-router-native（在rn中使用）。react-router-dom和react-router-native都依赖react-router，所以在安装时，react-router也会自动安装。创建web应用，使用：

npm install react-router-dom -S

react-router中奉行一切皆组件的思想，路由器-Router，链接-Link，路由-Route，独占-Switch，重定向-Redirect都以组件形式存在

Route渲染优先级：children>component>render
三者能接受同样的[route props]，包括match，location and history，但是当不匹配的时候，children的match为null。
这三种方式是互斥的。