<template>
    <div class="Address">
        <!-- <router-link to="./ReceivingAddress"> -->
        <div
            class="myConsignee van-ellipsis van-cell van-cell--clickable van-cell--center van-cell--borderless van-contact-card van-contact-card--edit"
        >
            <i class="van-icon van-icon-contact van-cell__left-icon"></i>
            <div class="van-cell__value van-cell__value--alone van-contact-card__value">
                <div class="van-ellipsis">
                    <span>收货人：</span>
                    <i>{{name}}</i>
                    {{tel}}
                </div>
                <div class="van-ellipsis">
                    <span>收货地址：</span>
                    {{ReceivingAddress}}
                </div>
            </div>
            <i class="van-icon van-icon-arrow van-cell__right-icon" v-if="this.state==undefined"></i>
        </div>
        <!-- </router-link> -->
        <div
            v-if="!(this.state==undefined)"
            class="myDelivery van-ellipsis van-cell van-cell--clickable van-cell--center van-cell--borderless van-contact-card van-contact-card--edit"
        >
            <i class="van-icon van-icon-contact van-cell__left-icon"></i>
            <div class="van-cell__value van-cell__value--alone van-contact-card__value">
                <div>
                    <span>配送方式：</span>商家配送
                </div>
                <div>
                    <span>收货地址：</span>立即配送
                </div>
            </div>
        </div>
        <!--  :editable="false" 是否为可编辑的联系人 -->
        <!-- <van-contact-card type="add" add-text="新建地址及联系人" /> -->
    </div>
</template>
<script>
// import { Popup } from "vant";
export default {
    name: "",
    props: ["state"],
    data() {
        return {
            name: "张三张三张三张三张三",
            tel: "13000000000",
            ReceivingAddress:
                "地址地址地址地址地址地址地址地址地址地址地址地址址"
        };
    }
};
</script>
<style lang='less' scoped>
.Address {
    .van-contact-card--add .van-cell__left-icon {
        font-size: 0.15rem;
        color: #323233;
    }
    .van-cell,
    .van-contact-card__value {
        font-size: 0.1rem;
        line-height: 0.2rem;
        margin: 0;
        span {
            display: inline-block;
            width: 20%;
            text-align-last: justify;
        }
    }
    .van-cell__left-icon {
        margin: 0 6px 0 -5px;
    }
    .van-icon-contact::before {
        font-size: 0.1rem;
    }
    .van-cell__value {
        position: relative;
    }
    .van-ellipsis {
        div i {
            font-style: normal;
            margin: 0 0.1rem 0 0;
        }
    }
    .myConsignee {
        .van-icon-add-square::before,
        .van-icon-contact::before {
            content: "\F07D";
        }
    }
    .myDelivery {
        border-bottom: 0.07rem solid #e6e6e6;
        .van-icon-add-square::before,
        .van-icon-contact::before {
            content: "\F07F";
        }
    }
}
</style>