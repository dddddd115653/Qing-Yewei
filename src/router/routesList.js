const routesList = [{
    path: '/',
    name: 'Home',
    alias: '/Home',
    component: () => import('../views/Home.vue')
},
{
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
},
{
    path: '/productCenter',
    name: 'ProductCenter',
    component: () => import('../views/ProductCenter.vue')
},
{
    path: '/ShoppingCart',
    name: 'ShoppingCart',
    component: () => import('../components/ShoppingCart/ShoppingCart.vue')

},
{
    path: '/ShoppingCartNO',
    name: 'ShoppingCartNO',
    component: () => import('../components/ShoppingCart/ShoppingCartNO.vue')

},
{
    path: '/Confirm',
    name: 'Confirm',
    component: () => import('../views/Confirm.vue')
},
{
    path: '/ModifyAddress',
    name: 'ModifyAddress',
    component: () => import('../components/Confirm/ModifyAddress.vue')
},
{
    path: '/Mine',
    name: 'Mine',
    component: () => import('../views/Mine.vue')
}
]

export default routesList