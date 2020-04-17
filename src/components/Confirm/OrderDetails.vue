<template>
    <div class="OrderDetails">
        <div class="head">
            <div class="state">
                <!-- :style="{backgroundImage: 'url(' + src_ + ')'}" -->
                <!-- 已取消 -->
                <img v-if="state==0" src="@/assets/images/OrderDetails0.jpeg" width="100%" />

                <img v-if="state==1" src="@/assets/images/OrderDetails1.jpeg" width="100%" />
                <div v-if="state==1">
                    <p>请在{{time_}}内完成支付 ，</p>超时将自动取消订单
                </div>
                <span v-if="state==2">支付完成</span>
            </div>
        </div>
        <Address :state="state"></Address>
        <Detailed></Detailed>
        <LeavingMessage :state="state"></LeavingMessage>
        <Money :state="state"></Money>
        <div class="OrderNumber">
            <p>
                <span>订单编号：</span>
                {{OrderNumber}}
                <i @click="copy(1)">复制</i>
            </p>
            <p>
                <span>下单时间：</span>
                {{OrderTime}}
            </p>
            <h5 @click="copy(2)">
                <van-icon name="newspaper-o" />一键复制订单信息
            </h5>
        </div>
    </div>
</template>
<script>
import { Toast } from "vant";
import Address from "@/components/Confirm/Address"; //收件地址
import Detailed from "@/components/Confirm/Detailed"; //购物清单
import LeavingMessage from "@/components/Confirm/LeavingMessage"; //商品留言
import Money from "@/components/Confirm/Money"; //支付信息
export default {
    name: "OrderDetails",
    components: {
        Address,
        Detailed,
        LeavingMessage,
        Money
    },
    data() {
        return {
            state: 1, //0,已取消;1,待支付;2,支付成功
            OrderNumber: "963563158624356", //订单编号
            OrderTime: 1587050740912 //订单时间
        };
    },
    methods: {
        copy(obj) {
            var input = document.createElement("input"); // 直接构建input
            if (obj == 1) {
                input.value = `订单编号：${this.OrderNumber}`; // 设置内容
            } else {
                input.value = `订单编号：${this.OrderNumber}   订单时间：${this.OrderTime}`; // 设置内容
            }
            document.body.appendChild(input); // 添加临时实例
            input.select(); // 选择实例内容
            document.execCommand("Copy"); // 执行复制
            document.body.removeChild(input); // 删除临时实例
            Toast({
                message: "已复制",
                position: "bottom",
                duration: "600"
            });
        }
    },
    created() {
        // 86400000
        this.sec = 86400 - (new Date().getTime() - this.OrderTime) / 1000;
        this.time_ = `${Math.floor((this.sec / 3600) % 24)}小时
                      ${Math.floor((this.sec / 60) % 60)}分钟`;

        Date.prototype.Format = function(fmt) {
            var o = {
                "M+": this.getMonth() + 1, // 月份
                "d+": this.getDate(), // 日
                "h+": this.getHours(), // 小时
                "m+": this.getMinutes(), // 分
                "s+": this.getSeconds(), // 秒
                "q+": Math.floor((this.getMonth() + 3) / 3), // 季度
                S: this.getMilliseconds() // 毫秒
            };
            if (/(y+)/.test(fmt))
                fmt = fmt.replace(RegExp.$1, this.getFullYear() + "");
            for (var k in o)
                if (new RegExp("(" + k + ")").test(fmt))
                    fmt = fmt.replace(
                        RegExp.$1,
                        RegExp.$1.length == 1
                            ? o[k]
                            : ("00" + o[k]).substr(("" + o[k]).length)
                    );
            return fmt;
        };
        this.OrderTime = new Date(this.OrderTime).Format("yy.MM.dd hh:mm");
    }
};
</script>
<style lang="less">
.van-contact-card::before {
    background: #dcdcdc;
    height: 0.01rem;
}
.OrderDetails .main.ActualPayment .PaymentMethod:last-child .Method {
    color: red;
    font-family: Avenir-Heavy, PingFang SC, Helvetica Neue, Arial, sans-serif;
}
</style>
<style lang='less' scoped>
.state {
    display: grid;
    // height: 1rem;
    div {
        position: absolute;
        left: 10%;
        top: 7%;
        display: inline-block;
        color: #fff;
        font-size: 0.09rem;
        line-height: 0.11rem;
        p {
            margin: 0;
        }
    }
}
.OrderNumber {
    padding: 0.1rem 8%;
    margin: 0.07rem 0 0.7rem;
    background: #fff;
    color: #656565;
    font-size: 0.09rem;
    line-height: 0.2rem;
    p {
        margin: 0;
        span {
            display: inline-block;
            width: 25%;
            font-size: 0.11rem;
        }
        i {
            float: right;
            font-style: normal;
        }
    }
    h5 {
        margin: 0;
        // font-weight: normal;
        text-align: center;
        font-size: 0.09rem;
        i {
            margin: 0 0.07rem 0 0;
        }
    }
}
</style>