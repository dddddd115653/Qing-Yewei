<template>
    <div class="OrderInformation">
        <p>
            订单信息
            <span>查看全部订单</span>
        </p>
        <ul>
            <li>
                <router-link to="order">
                    <van-icon name="credit-pay" />待付款
                </router-link>
            </li>
            <li>
                <router-link to="order">
                    <van-icon name="send-gift-o" />待发货
                </router-link>
            </li>
            <li>
                <router-link to="order">
                    <van-icon name="logistics" />待收货
                </router-link>
            </li>
            <li>
                <router-link to="order">
                    <van-icon name="comment-o" />待评价
                </router-link>
            </li>
            <li>
                <router-link to="order">
                    <van-icon name="service-o" />退款/售后
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: "OrderInformation"
};
</script>
<style lang='less' scoped>
.OrderInformation {
    margin: 0.1rem 0;
    background-color: #fff;
    p {
        margin: 0;
        padding: 0 3%;
        line-height: 0.3rem;
        font-size: 0.11rem;
        border-bottom: 0.01rem #ccc solid;
        span {
            float: right;
            font-size: 0.09rem;
            color: #5f5f5f;
            &::after {
                content: ">";
                margin: 0 0 0 0.1rem;
                font-weight: 700;
            }
        }
    }
    ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        li {
            font-size: 0.08rem;
            text-align: center;
            width: 20%;
            padding: 0.1rem 0;
            a {
                display: block;
                width: 100%;
                height: 100%;
            }
            i {
                font-size: 0.2rem;
                display: block;
                color: rgb(91, 91, 91);
            }
        }
    }
}
</style>