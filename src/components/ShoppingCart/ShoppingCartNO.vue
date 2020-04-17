<template>
    <div class="ShoppingCartNO">
        <div class="nav">
            <div v-if="this.$route.params.id == 'Distribution'" class="Distribution">
                <!-- 分销中心 -->
                <van-image width="1rem" height="1rem" src="https://img.yzcdn.cn/vant/cat.jpeg" />
                <p>您暂不符合知味达人申请资格</p>
            </div>
            <div v-else>
                <!-- 购物车空的时候 -->
                <van-image width="1rem" height="1rem" src="https://img.yzcdn.cn/vant/cat.jpeg" />
            </div>

            <router-link to="Home" class="GoForShop">去逛逛</router-link>
        </div>
        <van-divider>为您推荐</van-divider>

        <van-row type="flex" justify="space-around">
            <van-col span="11" v-for="{src,describe,price} in recommend" :key="describe">
                <van-image :src="src" />

                <div class="van-multi-ellipsis--l2">{{describe}}</div>
                <van-cell :value="price" />
            </van-col>
        </van-row>
    </div>
</template>
<script>
import Tabbar from "@/components/Tabbar";

export default {
    name: "ShoppingCartNO",
    components: {
        Tabbar
    },
    data() {
        return {
            recommend: [
                {
                    src: "https://img.yzcdn.cn/vant/cat.jpeg",
                    describe: "这是",
                    price: "￥5631.15"
                },
                {
                    src: "https://img.yzcdn.cn/vant/cat.jpeg",
                    describe:
                        "这是一段最多显示两行的文字，多余的内容会被省略一段最多显示两行的文字，多余的内容会被省略",
                    price: "￥5631.15"
                }
            ]
        };
    }
};
</script>
<style lang='less' scoped>
.ShoppingCartNO {
    background: #fff;
    .Distribution {
        text-align: center;
        p {
            margin: 0 0 0.1rem;
            font-size: 0.1rem;
        }
    }
    .nav {
        .van-image {
            display: block;
            margin: 0 auto;
            padding: 0.2rem 0;
        }
        .GoForShop {
            display: block;
            margin: 0 auto;
            text-align: center;
            width: 40%;
            color: #fff;
            font-size: 0.1rem;
            line-height: 0.2rem;
        }
    }
    .van-multi-ellipsis--l2 {
        font-size: 0.1rem;
        line-height: 0.11rem;
        height: 0.2rem;
    }
    .van-cell {
        padding: 0;
    }
    .van-cell__value--alone {
        font-weight: bold;
    }
}
</style>