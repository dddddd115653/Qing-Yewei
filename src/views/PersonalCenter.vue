<template>
    <div class="PersonalCenter">
        <!-- Usehead -->
        <Head></Head>
        <!-- 余额/积分/优惠券 -->
        <BalancePointsCoupons></BalancePointsCoupons>
        <!-- 订单信息 -->
        <OrderInformation></OrderInformation>
        <!-- 合伙人/拼团/砍价/推荐/账号与安全 -->
        <PerCenter></PerCenter>
        <!-- 技术支持 -->
        <Support></Support>
    </div>
</template>
<script>
import Head from "@/components/PersonalCenter/Head";
import BalancePointsCoupons from "@/components/PersonalCenter/BalancePointsCoupons";
import OrderInformation from "@/components/PersonalCenter/OrderInformation";
import PerCenter from "@/components/PersonalCenter/PerCenter/PerCenter";
import Support from "@/components/Home/Support";
export default {
    name: "PersonalCenter",
    components: {
        Head,
        BalancePointsCoupons,
        OrderInformation,
        PerCenter,
        Support
    },
    data() {
        return { title: "个人中心" };
    }
};
</script>
<style lang='less' scoped>
.PersonalCenter {
    font-size: 0.1rem;
}
</style>