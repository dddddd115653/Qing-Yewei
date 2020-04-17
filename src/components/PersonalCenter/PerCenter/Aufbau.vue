<template>
    <div class="Aufbau">
        <van-tabbar v-model="active">
            <van-tabbar-item>我发起的</van-tabbar-item>
            <van-tabbar-item>我参与的</van-tabbar-item>
        </van-tabbar>
        <van-icon name="bag" />
        <!-- 发起 -->
        <div v-show="active==0">
            <p>您没有发起任何拼团</p>
        </div>
        <!-- 参与 -->
        <div v-show="active==1">
            <p>您没有参与任何拼团</p>
        </div>
    </div>
</template>
<script>
export default {
    name: "Aufbau",
    data() {
        return {
            title: "我的拼团",
            active: 0
        };
    }
};
</script>
<style lang='less' scoped>
.Aufbau {
    text-align: center;
    font-size: 0.1rem;
    .van-tabbar {
        height: 0.5rem;
        line-height: 0.5rem;
    }
    .van-tabbar--fixed {
        position: relative;
    }
    .van-tabbar-item {
        font-size: 0.1rem;
    }
    .van-tabbar-item--active {
        color: red;
        height: 0.5rem;
        border-bottom: 0.01rem red solid;
    }
    i {
        font-size: 1rem;
        color: gray;
        margin: 1rem 0 0;
    }
    div p {
        margin: 0;
        color: #646566;
    }
}
</style>