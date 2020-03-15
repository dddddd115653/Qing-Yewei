import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/js/self-adaption.js'; // 对页面进行自适应
import 'vant/lib/index.css'; //引用字体css

Vue.config.productionTip = false

import {
    Tabbar,
    TabbarItem,
    Row,
    Col,
    Image,
    Cell,
    CellGroup,
    Swipe,
    SwipeItem,
    Lazyload,
    NavBar,
    Grid,
    GridItem,
    Search,
    Card,
    Icon,
    Button,
    Loading,
    Popup,
    NumberKeyboard,
    Field,
    Divider,
    Checkbox,
    CheckboxGroup,
    SwipeCell,
    SubmitBar,
    ContactCard,
    ContactList,
    ContactEdit,
    CouponCell,
    CouponList,
    ActionSheet, RadioGroup, Radio
    // Vant
} from 'vant';


Vue.use(Tabbar)
    .use(TabbarItem)
    .use(Row)
    .use(Col)
    .use(Image)
    .use(Cell)
    .use(CellGroup)
    .use(Swipe)
    .use(SwipeItem)
    .use(Lazyload, {
        lazyComponent: true
    })
    .use(NavBar)
    .use(Grid)
    .use(GridItem)
    .use(Search)
    .use(Card)
    .use(Icon)
    .use(Button)
    .use(Loading)
    .use(Popup)
    .use(NumberKeyboard)
    .use(Field)
    .use(Divider)
    .use(Checkbox)
    .use(CheckboxGroup)
    .use(SwipeCell)
    .use(SubmitBar)
    .use(ContactCard)
    .use(ContactList)
    .use(ContactEdit)
    .use(CouponCell)
    .use(CouponList)
    .use(ActionSheet)
    .use(RadioGroup)
    .use(Radio)
// .use(Vant)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')