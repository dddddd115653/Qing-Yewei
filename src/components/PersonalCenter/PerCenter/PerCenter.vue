<template>
    <div class="PerCenter">
        <ul>
            <router-link to="/ShoppingCartNO/Distribution">
                <li>
                    <van-icon name="cluster-o" />中国合伙人
                </li>
            </router-link>
            <router-link to="/Aufbeau">
                <li>
                    <van-icon name="friends-o" />拼团
                </li>
            </router-link>
            <router-link to="/Bargain">
                <li>
                    <van-icon name="refund-o" />砍价
                </li>
            </router-link>
            <router-link to="/Recommend">
                <li>
                    <van-icon name="good-job-o" />推荐
                </li>
            </router-link>

            <router-link to="/AccountSecurity">
                <li>
                    <van-icon name="setting-o" />账号与安全
                </li>
            </router-link>
        </ul>
    </div>
</template>
<script>
export default {
    name: "PerCenter"
};
</script>
<style lang='less' scoped>
.PerCenter {
    background: #fff;
    a {
        display: block;
        // width: 90%;
    }
    li {
        padding: 0 3%;
        line-height: 0.3rem;
        // box-sizing: border-box;
        i {
            line-height: 0.3rem;
            font-size: 0.2rem;
            float: left;
            margin: 0 0.1rem 0 0;
            color: #5b5b5b;
        }
        &:after {
            content: ">";
            float: right;
            color: #5f5f5f;
            font-weight: 700;
        }
    }
    a + a {
        border-top: 0.01rem #ccc solid;
    }
}
</style>