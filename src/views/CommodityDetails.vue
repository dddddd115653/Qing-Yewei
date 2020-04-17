<template>
    <!-- 商品详情 -->
    <div class="CommodityDetails">
        <!-- 商品轮播图片 -->
        <Swipe></Swipe>
        <!-- 商品信息 -->
        <Information></Information>

        <!-- 领券 -->
        <Coupon></Coupon>

        <!-- 规格 -->
        <Specifications></Specifications>

        <!-- 商品评论 -->
        <Comment></Comment>

        <!-- 图文详情 -->
        <DetailsImg></DetailsImg>

        <!-- 商品导航 -->
        <van-goods-action>
            <van-goods-action-icon icon="chat-o" text="客服" dot />
            <van-goods-action-icon icon="cart-o" text="购物车" info="5" to="/ShoppingCart" />
            <van-goods-action-icon icon="shop-o" text="店铺" to="/" />
            <van-goods-action-button type="warning" text="加入购物车" />
            <van-goods-action-button type="danger" text="立即购买" />
        </van-goods-action>
        <!-- 技术支持 -->
        <Support></Support>
    </div>
</template>
<script>
import Swipe from "@/components/Home/Swipe";
import Information from "@/components/CommodityDetails/Information";
import Coupon from "@/components/CommodityDetails/Coupon";
import Specifications from "@/components/CommodityDetails/Specifications";
import Comment from "@/components/CommodityDetails/Comment";
import DetailsImg from "@/components/CommodityDetails/DetailsImg";
import Support from "@/components/Home/Support";
export default {
    name: "CommodityDetails",
    components: {
        Swipe,
        Information,
        Coupon,
        Specifications,
        Comment,
        DetailsImg,
        Support
    },

    data() {
        return {
            goodsId: 96458 //商品ID
        };
    }
};
</script>
<style lang='less' >
.van-goods-action {
    z-index: 11;
}
p,
h5 {
    margin: 0;
}
i {
    font-style: normal;
}
.CommodityDetails {
    margin-bottom: 50px;
    background-color: #e6e6e6;
}
.information,
.Coupon,
.Specifications,
.comment {
    padding: 0 3%;
    margin-bottom: 0.05rem;
    background: #fff;
    font-size: 0.1rem;
}

.Coupon,
.Specifications {
    line-height: 0.2rem;
    > i {
        float: right;
        color: #757575;
        &:after {
            content: ">";
            margin: 0 0 0 0.1rem;
        }
    }
}
</style>