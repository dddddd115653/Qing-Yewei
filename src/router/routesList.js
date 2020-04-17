const routesList = [{
    path: '/',
    name: 'Home',
    alias: '/Home',
    component: () => import('../views/Home.vue')
}, {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
}, {
    path: '/productCenter',
    name: 'ProductCenter',
    component: () => import('../views/ProductCenter.vue')
}, {
    path: '/ShoppingCart',
    name: 'ShoppingCart',
    component: () => import('../components/ShoppingCart/ShoppingCart.vue')

}, {//购物车没有/不符合分销时
    path: '/ShoppingCartNO/:id',
    name: 'ShoppingCartNO',
    component: () => import('../components/ShoppingCart/ShoppingCartNO.vue')

}, {
    path: '/Confirm',
    name: 'Confirm',
    component: () => import('../views/Confirm.vue')
}, {
    path: '/Order',
    name: 'Order',
    component: () => import('../components/Order/Order.vue')
}, {
    path: '/CommodityDetails',
    name: 'CommodityDetails',
    component: () => import('../views/CommodityDetails.vue')
}, {//评论列表
    path: '/CommentList',
    name: 'CommentList',
    component: () => import('../components/CommodityDetails/CommentList.vue')
}, {//个人中心
    path: '/PersonalCenter',
    name: 'PersonalCenter',
    component: () => import('../views/PersonalCenter.vue')
}, {
    //拼团
    path: '/Aufbeau',
    component: () => import('../components/PersonalCenter/PerCenter/Aufbau.vue')
}, {
    //砍价
    path: '/Bargain',
    component: () => import('../components/PersonalCenter/PerCenter/Bargain.vue')
}, {
    //推荐
    path: '/Recommend',
    component: () => import('../components/PersonalCenter/PerCenter/Recommend.vue')
}, {
    //账号与安全
    path: '/AccountSecurity',
    component: () => import('../components/PersonalCenter/PerCenter/AccountSecurity.vue')
}, {
    //收货地址
    path: '/ReceivingAddress',
    component: () => import('../components/PersonalCenter/PerCenter/ReceivingAddress.vue')
}, {
    //修改及编辑收货地址
    path: '/EditAddress/:id',
    component: () => import('../components/PersonalCenter/PerCenter/EditAddress.vue')
}, {
    //会员中心
    path: '/Member',
    component: () => import('../components/PersonalCenter/PerCenter/Member.vue')
}, {
    //成长值
    path: '/Growth',
    component: () => import('../components/PersonalCenter/PerCenter/Growth.vue')
}, {
    //订单详情
    path: '/OrderDetails',
    component: () => import('../components/Confirm/OrderDetails.vue')
}
]

export default routesList