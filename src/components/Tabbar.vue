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
            <van-col span="7">
                <router-link to="/mine">
                    <van-tabbar-item>我的知味</van-tabbar-item>
                </router-link>
            </van-col>
        </van-tabbar>
    </div>
</template>
<script>
export default {
    name: "Tabbar",
    data() {
        return {
            active: 0 //tabbar
        };
    }
};
</script>
<style lang='less' scoped>
.van-tabbar {
    height: 0.4rem;
}

.van-tabbar-item,
.van-tabbar-item__icon .van-icon {
    font-size: 0.12rem !important;
}

.van-col {
    display: flex;

    a {
        display: contents;
    }
}
.van-col + .van-col {
    border-width: 0 0 0 0.01rem;
    border-style: solid;
}
.van-tabbar-item--active {
    color: #232323;
}
</style>