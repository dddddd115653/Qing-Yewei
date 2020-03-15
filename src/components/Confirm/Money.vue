<template>
    <div class="Money">
        <div class="main">
            <div class="floR">
                <span>共{{num}}件商品</span>
                <span>
                    合计:
                    <i>￥{{Amount/100}}</i>
                </span>
            </div>
        </div>
        <!-- 优惠券单元格 -->
        <div class="main coupon">
            <van-coupon-cell
                :coupons="coupons"
                :chosen-coupon="chosenCoupon"
                @click="showList = true"
            />
            <!-- 优惠券列表 -->
            <van-popup
                v-model="showList"
                round
                position="bottom"
                style="height: 90%; padding-top: 4px;"
            >
                <van-coupon-list
                    :coupons="coupons"
                    :chosen-coupon="chosenCoupon"
                    :disabled-coupons="disabledCoupons"
                    @change="onChange"
                    @exchange="onExchange"
                />
            </van-popup>
        </div>
        <!-- 支付方式单元格 -->
        <div class="main">
            <div class="PaymentMethod" @click="show = true">
                <span class="Payment">支付方式</span>
                <span class="Method">在线支付</span>
            </div>
            <van-action-sheet v-model="show" title="请选择支付方式">
                <div class="content">
                    <van-radio-group v-model="radio" checked-color="#07c160">
                        <van-radio name="1" @click="show = false">在线支付</van-radio>
                    </van-radio-group>
                </div>
            </van-action-sheet>
        </div>
        <div class="main ActualPayment">
            <div class="PaymentMethod">
                <span class="Payment">商品金额</span>
                <span class="Method">￥{{Amount/100}}</span>
            </div>
            <div class="PaymentMethod">
                <span class="Payment">优惠抵扣</span>
                <span class="Method">-￥{{Preferential/100}}</span>
            </div>
            <div class="PaymentMethod">
                <span class="Payment">运费</span>
                <span class="Method">+￥{{freight/100}}</span>
            </div>
            <div class="PaymentMethod">
                <span class="Payment">实际支付</span>
                <span class="Method">￥{{ActualPayment/100}}</span>
            </div>
        </div>
        <van-submit-bar :price="ActualPayment" button-text="提交订单" @submit="onSubmit" />
    </div>
</template>
<script>
const coupon = {
    id: "124",
    value: 150, //折扣券优惠金额，单位分
    name: "优惠券名称", //优惠券名称
    startAt: 1489104000, //卡有效开始时间 (时间戳, 单位秒)
    endAt: 1514592000, //卡失效日期 (时间戳, 单位秒)
    valueDesc: "1.5", //折扣券优惠金额文案
    unitDesc: "元", //单位文案
    condition: "无使用门槛\n最多优惠12元", //满减条件
    reason: "不可用原因，优惠券不可用时展示", //不可用原因，优惠券不可用时展示
    description: "单笔订单最多可用一张优惠券" //描述信息，优惠券可用时展示
};
const coupon1 = {
    id: "12",
    value: 150, //折扣券优惠金额，单位分
    name: "优惠券名称", //优惠券名称
    startAt: 1489104000, //卡有效开始时间 (时间戳, 单位秒)
    endAt: 1514592000, //卡失效日期 (时间戳, 单位秒)
    valueDesc: "1.5", //折扣券优惠金额文案
    unitDesc: "元", //单位文案
    condition: "无使用门槛\n最多优惠12元", //满减条件
    reason: "不可用原因，优惠券不可用时展示", //不可用原因，优惠券不可用时展示
    description: "描述信息，优惠券可用时展示" //描述信息，优惠券可用时展示
};
export default {
    name: "Money",
    data() {
        return {
            num: "324",
            showList: false, //选择优惠券 是否展示
            chosenCoupon: -1, //当前选中的优惠券 (按下标选,-1为不使用优惠券)
            coupons: [coupon, coupon1], //可用优惠券
            disabledCoupons: [coupon], //不可用优惠券
            show: false, //支付方式
            radio: "1", //支付方式
            Amount: 854681, //商品金额
            Preferential: 0, //优惠抵扣
            freight: 0, //运费
            ActualPayment: 0 //实际支付
        };
    },
    methods: {
        onChange(index) {
            this.showList = false;
            this.chosenCoupon = index;
            this.Preferential = this.coupons[index].value;
            this.AmountFn();
        },
        onExchange(code) {
            this.coupons.push(coupon);
        },
        AmountFn() {
            this.ActualPayment = this.Amount - this.Preferential + this.freight;
        },
        onSubmit() {}
    },
    created() {
        this.AmountFn();
    }
};
</script>
<style lang='less' scoped>
.Money {
    padding: 0 0 0.5rem;
}
.main {
    width: 84%;
    padding: 0 8%;
    border-bottom: 0.07rem solid #e6e6e6;

    .floR {
        line-height: 0.4rem;
        text-align: right;
        color: #1f1f1f;
        span {
            margin: 0 0 0 0.4rem;
        }
        i {
            font-style: normal;
        }
    }
    .Payment {
        color: #323233;
    }
    .Method {
        color: #969799;
        float: right;
    }
}
.coupon * {
    font-size: 0.1rem;
}
.coupon .van-cell {
    padding: 0;
}
.content {
    padding: 0.1rem 0.2rem;
    border-top: 0.01rem solid #ccc;
}
.floR,
.coupon .van-cell__title span,
.coupon .van-cell__value span,
.coupon .van-cell.van-cell--clickable.van-coupon-cell i,
.PaymentMethod {
    line-height: 0.4rem;
    font-size: 0.11rem;
}
.ActualPayment .PaymentMethod {
    line-height: 0.2rem;
}
.ActualPayment {
    border: 0;
}
.van-submit-bar {
    border-top: 0.001rem solid #ccc;
}
</style>