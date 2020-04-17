<template>
    <div class="AccountSecurity">
        <!-- 账号与安全 -->
        <div>
            <p>
                客户编号
                <span>{{useId}}</span>
            </p>
        </div>
        <div>
            <!-- <router-link to="">个人信息</router-link> -->
            <router-link to="ReceivingAddress">收货地址</router-link>
        </div>
    </div>
</template>
<script>
export default {
    name: "AccountSecurity",
    data() {
        return {
            title: "账号与安全",
            useId: 157894269 //知味达人(客户编号)
        };
    }
};
</script>
<style lang='less' scoped>
.AccountSecurity {
    div {
        font-size: 0.1rem;
        line-height: 0.4rem;
        background: #fff;
        margin: 0 0 0.08rem;
        span {
            float: right;
        }
        p {
            margin: 0;
            padding: 0 3%;
        }
    }
    div + div {
        a {
            // width: 100%;
            display: block;
            padding: 0 3%;
        }
        a + a {
            border-top: 0.01rem #ccc solid;
        }
        a::after {
            content: ">";
            float: right;
            color: #646566;
        }
    }
}
</style>