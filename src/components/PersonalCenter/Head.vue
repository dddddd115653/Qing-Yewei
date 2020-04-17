<template>
    <div class="UseHead">
        <!-- <div class="UseHead" :style="{backgroundImage: 'url(' + UseBgBig + ')' }"> -->
        <div class="head">
            <img :src="useImg" />
            <span>{{useName}}</span>
            <van-icon name="qr" size="0.18rem" />
        </div>
        <router-link to="/Member">
            <div class="Member" :style="{backgroundImage: 'url(' + UseBgSmall + ')'}">
                <img src="@/assets/images/UseVipBg.jpg" alt srcset />
                <font>{{useNowVip}}会员</font>
                <i v-if="useNextVip">下一等级 {{useNextVip}}会员</i>
                <i v-else>已达到最高等级</i>
            </div>
        </router-link>
    </div>
</template>
<script>
import UseBgBig from "@/assets/images/UseBgBig.jpg";
import UseBgSmall from "@/assets/images/UseBgSmall.jpg";
import UseVipBg from "@/assets/images/UseVipBg.jpg";
export default {
    name: "Head",
    data() {
        return {
            UseBgBig,
            UseBgSmall,
            UseVipBg,

            useImg: "https://via.placeholder.com/300/ededde",
            useName: "hei 你好啊 w(ﾟДﾟ)w",
            useNowVip: "黄金", //大众、黄金、铂金、钻石
            useNextVip: "铂金" //当 useNowVip 是钻石 则不传(已达到最高等级)
        };
    }
};
</script>
<style lang='less' scoped>
i {
    font-style: normal;
}
.UseHead {
    // background-image: url("~@/assets/images/UseBg.jpg") center center no-repeat;
    background: gray;
    background-size: 100% auto;
    display: grid;
    color: #fff;
    overflow: hidden;
    .head {
        line-height: 0.3rem;
        padding: 0 0.2rem;
        margin: 0.22rem 0 0.15rem;
        * {
            float: left;
        }
        img {
            width: 0.3rem;
            height: 0.3rem;
            border-radius: 50%;
        }
        span {
            font-size: 0.11rem;
            margin: 0 0.15rem;
        }
        i {
            line-height: 0.3rem;
        }
    }
    .Member {
        // display: block;
        width: 94%;
        margin: 0 3%;
        padding: 0 0.1rem;
        box-sizing: border-box;
        border-radius: 0.1rem 0.1rem 0 0;
        line-height: 0.3rem;
        box-shadow: 0 0 0.15rem #eaeaea;
        img {
            width: 0.1rem;
            height: 0.15rem;
            margin: 0.075rem 0.05rem;
            float: left;
            // display: block;
        }
        font {
            font-size: 0.1rem;
        }
        i {
            float: right;
            font-size: 0.07rem;
            font-weight: 500;
        }
    }
}
</style>