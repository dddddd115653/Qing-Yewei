<template>
    <div class="information">
        <p>
            {{title}}
            <span>
                <van-icon name="share" />分享
            </span>
        </p>
        <h5>
            销售价￥
            <i v-if="UnitPrice">
                <font>{{UnitPrice}}</font>.00
            </i>
            <i v-else>
                <font>{{min}}</font>.00~
                <font>{{max}}</font>.00
            </i>
            <span>已售{{num}}件</span>
        </h5>
        <s v-if="minS&&maxS">市场价￥{{minS}}.00~{{maxS}}.00</s>
    </div>
</template>
<script>
export default {
    name: "Information",
    data() {
        return {
            title: "久宝隆.福鼎白茶2013特级寿眉",
            UnitPrice: "66", //销售单价(商品只有一个规格时)
            min: "1190", //销售价最低值
            max: "45600", //销售价最高值
            minS: "2640", //市场价最低值
            maxS: "63200", //市场价最高值
            num: 3 //已售件数
        };
    }
};
</script>
<style lang='less' scoped>
.information {
    font-size: 0.12rem;
    line-height: 0.3rem;
    span {
        float: right;
    }
    p span {
        font-size: 0.08rem;
        line-height: 0.12rem;
        text-align: center;
        border-left: 0.01rem #ccc solid;
        padding-left: 0.1rem;
        margin: 0.05rem 0 0;
        color: #828282;
        i {
            display: block;
        }
    }
    h5 {
        color: red;
        font-weight: normal;
        font-size: 0.09rem;
        font {
            font-size: 0.13rem;
        }
        span {
            color: #828282;
        }
    }
    s {
        display: block;
        margin: -0.13rem 0 0;
        font-size: 0.08rem;
    }
}
</style>