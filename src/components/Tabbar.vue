<template>
    <div class="tabbar">
        <van-tabbar v-model="active">
            <van-col span="3">
                <router-link to="/">
                    <van-tabbar-item icon="wap-home"></van-tabbar-item>
                </router-link>
            </van-col>
            <van-col span="7">
                <router-link to="/ProductCenter">
                    <van-tabbar-item>产品中心</van-tabbar-item>
                </router-link>
            </van-col>
            <van-col span="7">
                <router-link to="/ShoppingCart">
                    <van-tabbar-item>购物车</van-tabbar-item>
                </router-link>
            </van-col>
            <van-col span="7" @click="DropdownMenu">
                <div class="DropdownMenu" v-show="DropdownMenuV">
                    <router-link to="/Order">
                        <span>我的订单</span>
                    </router-link>
                    <router-link to="/ShoppingCartNO/Distribution">
                        <span class="distribution">我的分销</span>
                    </router-link>
                    <router-link to="/PersonalCenter">
                        <span class="PersonalCenter">
                            个人中心
                            <div class="border-down">
                                <i></i>
                            </div>
                        </span>
                    </router-link>
                </div>
                <van-tabbar-item>
                    <van-icon name="wap-nav" />&nbsp;我的知味
                </van-tabbar-item>
            </van-col>
        </van-tabbar>
    </div>
</template>
<script>
export default {
    name: "Tabbar",
    data() {
        return {
            active: 0, //tabbar
            DropdownMenuV: false //上拉菜单的显示隐藏
        };
    },
    methods: {
        DropdownMenu() {
            this.DropdownMenuV = !this.DropdownMenuV;
        }
    }
};
</script>
<style lang='less' scoped>
.van-tabbar {
    height: 0.4rem;
}

.van-col {
    display: flex;
    > a {
        display: inline-flex;
        width: 100%;
    }
}
.van-col + .van-col {
    border-width: 0 0 0 0.01rem;
    border-style: solid;
}
.van-tabbar-item--active {
    color: #232323;
}
.van-tabbar--fixed {
    z-index: 10;
}
.DropdownMenu {
    position: absolute;
    right: 2%;
    width: 25.16666667%;
    bottom: 0.5rem;
    border-radius: 0.03rem;
    border: 0.01rem #cacaca solid;
    background: #fff;
    .distribution {
        border-top: 0.01rem #cacaca solid;
        border-bottom: 0.01rem #cacaca solid;
    }
    .PersonalCenter {
        position: relative;
    }
    span {
        display: block;
        color: #484848;
        font-size: 0.1rem;
        line-height: 0.2rem;
        text-align: center;
    }
    .border-down {
        width: 0;
        height: 0;
        border-left: 0.11rem solid transparent;
        border-right: 0.11rem solid transparent;
        border-top: 0.1rem solid #cacacb;
        position: absolute;
        left: 40%;
    }
    .border-down i {
        display: block;
        width: 0;
        height: 0;
        border-left: 0.09rem solid transparent;
        border-right: 0.09rem solid transparent;
        border-top: 0.09rem solid #fff;
        position: absolute;
        left: -0.09rem;
        top: -0.1rem;
    }
}
</style>
<style lang="less">
.tabbar {
    .van-tabbar-item,
    .van-tabbar-item__icon .van-icon {
        font-size: 0.11rem !important;
        // margin-bottom: -0 !important;
        // line-height: 0.4rem;
    }
}
</style>