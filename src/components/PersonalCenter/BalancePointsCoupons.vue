<template>
    <div class="BalancePointsCoupons">
        <router-link to="Balance">
            <p>{{balance}}</p>
            <span>余额</span>
        </router-link>
        <router-link to="Points" class="Points">
            <p>{{points}}</p>
            <span>积分</span>
        </router-link>
        <router-link to="Coupons">
            <p>{{coupons}}</p>
            <span>优惠券</span>
        </router-link>
    </div>
</template>
<script>
export default {
    name: "BalancePointsCoupons",
    data() {
        return {
            balance: "0.00",
            points: "9658964",
            coupons: "16"
        };
    }
};
</script>
<style lang='less' scoped>
.BalancePointsCoupons {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    text-align: center;
    line-height: 0.17rem;
    font-size: 0.11rem;
    background-color: #fff;
    p {
        margin: 0;
    }
    a {
        width: 33.33%;
        padding: 0.1rem 0;
    }
    .Points {
        box-sizing: border-box;
        border-style: solid;
        border-top-width: 0;
        border-bottom-width: 0;
        border-right-width: 0.01rem;
        border-left-width: 0.01rem;
        border-color: #cacaca;
    }
    span {
        font-size: 0.08rem;
        color: #333;
    }
}
</style>