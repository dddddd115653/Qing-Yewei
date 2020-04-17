<template>
    <div class="member">
        <!-- 会员中心 -->
        <div class="centerBox" :style="centerBox">
            <div class="center" :style="center">
                <p>
                    <van-icon name="qr" />知味达人
                    <font>{{useId}}</font>
                </p>
                <h5>{{useNowVip}}会员</h5>
                <span @click="goGrowth">
                    当前成长值为{{GrowthVal}}
                    <em v-if="useNowVip == '钻石'">，已达到最高等级</em>
                </span>
            </div>
        </div>
        <div class="equity">
            <p>会员权益</p>
            <van-grid :border="false">
                <van-grid-item
                    v-for="{index,icon,text} in discount"
                    :key="index"
                    :icon="icon"
                    :text="text"
                />
                <van-grid-item class="more-o" icon="more-o" text="敬请期待" />
            </van-grid>
        </div>
    </div>
</template>
<script>
export default {
    name: "Member",
    data() {
        return {
            title: "会员中心",
            useId: "5636984462156", //知味达人(客户编号)
            useNowVip: "钻石",
            GrowthVal: "69853", //成长值
            discount: [
                {
                    index: "1",
                    icon: "gift-o",
                    text: "礼包"
                },
                {
                    index: "2",
                    icon: "discount",
                    text: "商品折扣"
                }
            ],
            centerBox: {
                backgroundImage:
                    "url(" + require("@/assets/images/centerBox.jpg") + ")",
                backgroundRepeat: "repeat",
                backgroundSize: "100% 100%"
            },
            center: {
                backgroundImage:
                    "url(" + require("@/assets/images/center.jpg") + ")",
                backgroundRepeat: "repeat",
                backgroundSize: "100% 100%"
            }
        };
    },
    methods: {
        goGrowth() {
            this.$router.push("/Growth");
        }
    }
};
</script>
<style lang='less' scoped>
.member {
    p,
    h5 {
        margin: 0;
    }
    em {
        font-style: normal;
    }
    position: fixed;
    z-index: 3;
    overflow: auto;
    width: 100%;
    height: 100%;
    background-color: #fff;
    .centerBox {
        padding: 0.3rem 10%;
        border-bottom-right-radius: 4rem 1rem;
        border-bottom-left-radius: 4rem 1rem;
        overflow: hidden;
        height: 0.8rem;

        .center {
            color: #e6c71e;
            border-radius: 0.1rem 0.1rem 0 0;
            padding: 0.1rem 0 2.5rem;
            p,
            h5,
            span {
                display: block;
                padding-left: 0.2rem;
            }
            p {
                font-size: 0.13rem;
                i {
                    float: right;
                    padding: 0 0.1rem;
                    font-size: 0.18rem;
                }
                font {
                    font-size: 0.08rem;
                }
            }
            h5 {
                font-size: 0.15rem;
                font-weight: normal;
                line-height: 0.4rem;
            }
            span {
                font-size: 0.09rem;
            }
        }
    }
    .equity {
        p {
            text-align: center;
            font-size: 0.17rem;
            line-height: 0.3rem;
            margin: 0.1rem 0 0;
        }
        .van-grid-item {
            color: #e6c71e;
        }
        .van-grid-item__text {
            color: #000;
        }
        .more-o {
            opacity: 0.5;
        }
    }
}
</style>