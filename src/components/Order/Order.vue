<template>
    <div class="Order">
        <!-- 订单列表 -->
        <van-tabbar v-model="active">
            <van-tabbar-item >全部</van-tabbar-item>
            <van-tabbar-item >待支付</van-tabbar-item>
            <van-tabbar-item >待发货</van-tabbar-item>
            <van-tabbar-item >待收货</van-tabbar-item>
        </van-tabbar>
        <div v-if="OrderV" class="OrderL">
            <div
                class="OrderList"
                v-for="{id,date,state,thumb,title,desc,UnitPrice,num} in OrderList"
                :key="id"
            >
                <div class="nav">
                    <span class="date">
                        下单时间：
                        <i>{{date}}</i>
                    </span>
                    <span class="span_red">{{state}}</span>
                </div>
                <van-card :num="num" :price="UnitPrice" :desc="desc" :title="title" :thumb="thumb">
                    <template #footer>
                        <p><pre>共{{num}}件商品  实付<span class="span_red" >￥{{(num*(UnitPrice*10)/10).toFixed(2)}}</span></pre></p>
                        <van-button size="mini">去支付</van-button>
                    </template>
                </van-card>
            </div>
        </div>
        <div v-else class="OrderV0">
            <van-icon name="description" size="1rem" />
            没有相关订单
        </div>
    </div>
</template>
<script>
export default {
    name: "Order",
    data() {
        return {
            active:0,
            OrderV: true, //是否有订单
            OrderList: [
                {
                    date: "2020-03-31 16:12:31",
                    state: "待支付",
                    thumb:
                        "http://img2.spzs.com/group1/M00/33/E3/cnHoeV0S0ZCAdiJXAADISDl8wLE959.jpg",
                    title: "商品标题",
                    desc: "描述信息",
                    UnitPrice: "12.32",
                    num: 7
                },
                {
                    date: "2020-03-31 16:12:31",
                    state: "待支付",
                    thumb:
                        "http://img2.spzs.com/group1/M00/33/E3/cnHoeV0S0ZCAdiJXAADISDl8wLE959.jpg",
                    title: "商品标题",
                    desc: "描述信息",
                    UnitPrice: "10.00",
                    num: 2
                }
            ]
        };
    }
};
</script>
<style lang='less' scoped>
.van-tabbar--fixed{
    position: relative;
    font-size: 0.1rem;
    line-height: 0.23rem;
    .van-tabbar-item--active{
        color: red;
        position: relative;
    }
    .van-tabbar-item--active::after{
            content: ' ';
            width: 100%;
            height: 0.01rem;
            background: red;
            position: absolute;
            bottom: 0;
    }
}
.OrderV0 {//没有订单时
    background: #e6e6e6;
    padding: 0.5rem 0;
    color: #737373;
    text-align: center;
    .van-icon {
        display: table;
        margin: 0 auto;
        color: #ccc;
    }
}
.OrderL {
    background-color: #e6e6e6;
}
.OrderList {
    padding: 0.05rem 0 0;
    .nav {
        background: #fafafa;
        padding: 0 0.1rem;
        font-size: 0.08rem;
        line-height: 0.2rem;
        color: #3d3d3d;
        i {
            font-style: normal;
        }
        .span_red {
            float: right;
        }
    }
    .span_red {
        color: red;
    }
    .van-card {
        padding: 0.1rem 0.1rem 0;
    }
    .van-card:not(:first-child) {
        margin-top: 0;
    }
    .van-card__footer p {
        border-top: 0.01rem #cacaca solid;
        border-bottom: 0.01rem #cacaca solid;
        padding: 0 0.1rem 0 0;
        margin: 0;
        line-height: 0.25rem;
    }
    .van-card__footer button {
        margin: 0.1rem 0.1rem 0.1rem 0;
        border: 0.01rem red solid;
        color: red;
    }
    .van-card__thumb {
        width: 0.8rem;
        height: 0.8rem;
    }
    .van-card__title,
    .van-card__desc {
        font-size: 0.09rem;
        line-height: 0.11rem;
        max-height: 0.21rem;
        height: 0.21rem;
    }
    .van-card__price {
        font-size: 0.09rem;
        .van-card__price-integer {
            font-size: 0.14rem;
        }
    }
    .van-card__num {
        font-size: 0.1rem;
        color: initial;
    }
}
</style>