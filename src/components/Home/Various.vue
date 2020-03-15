<template>
    <div class="various">
        <div v-for="{classn, subclass} in otherList" :key="classn">
            <lazy-component>
                <van-row>
                    <van-col span="5" offset="1">{{classn}}</van-col>
                    <van-col span="5" offset="13" class="smallFont">查看更多</van-col>
                </van-row>
                <van-grid :border="false" :column-num="3">
                    <van-grid-item v-for="{imageSrc,name,price,selfLabel} in subclass" :key="name">
                        <van-image v-lazy :src="imageSrc" />
                        <div class="desc">{{name}}</div>
                        <van-col>￥{{price}}</van-col>
                        <div :class="[selfLabel?'selfLabel':'']">{{selfLabel}}</div>
                    </van-grid-item>
                </van-grid>
            </lazy-component>
        </div>
    </div>
</template>
<script>
export default {
    name: "Various",
    data() {
        return {
            otherList: [
                {
                    classn: "新品尝鲜",
                    subclass: [
                        {
                            imageSrc: `https://via.placeholder.com/300/${this.randomColor()}`,
                            name:
                                "久宝龙 金奖肉挂/私房茶 福建武夷山高山岩茶,小罐茶,送礼经",
                            price: "498.00",
                            selfLabel: "标签"
                        },
                        {
                            imageSrc: `https://via.placeholder.com/300/${this.randomColor()}`,
                            name: "久宝龙 典",
                            price: "498.00"
                        }
                    ]
                },
                {
                    classn: "热销推荐",
                    subclass: [
                        {
                            imageSrc: `https://via.placeholder.com/300/${this.randomColor()}`,
                            name:
                                "久宝龙 金奖肉挂/私房茶 福建武夷山高山岩茶,小罐茶,送礼",
                            price: "498.00",
                            selfLabel: "标签"
                        },
                        {
                            imageSrc: `https://via.placeholder.com/300/${this.randomColor()}`,
                            name:
                                "久宝龙 金奖肉挂/私房茶 福建武夷山高山岩茶,小罐茶,送",
                            price: "498.00"
                        },
                        {
                            imageSrc: `https://via.placeholder.com/300/${this.randomColor()}`,
                            name:
                                "久宝龙 金奖肉挂/私房茶 福建武夷山高山岩茶,小罐茶,",
                            price: "498.00",
                            selfLabel: "标签"
                        },
                        {
                            imageSrc: `https://via.placeholder.com/300/${this.randomColor()}`,
                            name:
                                "久宝龙 金奖肉挂/私房茶 福建武夷山高山岩茶,小罐茶",
                            price: "498.00"
                        },
                        {
                            imageSrc: `https://via.placeholder.com/300/${this.randomColor()}`,
                            name:
                                "久宝龙 金奖肉挂/私房茶 福建武夷山高山岩茶,小罐",
                            price: "498.00"
                        }
                    ]
                },
                {
                    classn: "各地美食",
                    subclass: [
                        {
                            imageSrc: `https://via.placeholder.com/300/${this.randomColor()}`,
                            name:
                                "久宝龙 金奖肉挂/私房茶 福建武夷山高山岩茶,小",
                            price: "498.00"
                        },
                        {
                            imageSrc: `https://via.placeholder.com/300/${this.randomColor()}`,
                            name: "久宝龙 金奖肉挂/私房茶 福建武夷山高山岩茶,",
                            price: "498.00",
                            selfLabel: "标签"
                        },
                        {
                            imageSrc: `https://via.placeholder.com/300/${this.randomColor()}`,
                            name: "久宝龙 金奖肉挂/私房茶 福建武夷山高山岩茶",
                            price: "498.00"
                        },
                        {
                            imageSrc: `https://via.placeholder.com/300/${this.randomColor()}`,
                            name: "久宝龙 金奖肉挂/私房茶 福建武夷山高山岩",
                            price: "498.00"
                        },
                        {
                            imageSrc: `https://via.placeholder.com/300/${this.randomColor()}`,
                            name:
                                "久宝龙 金奖肉挂/私房茶 福建武夷山高山岩茶,小罐茶,送礼经典",
                            price: "498.00"
                        }
                    ]
                }
            ]
        };
    },
    props: ["randomColor"]
};
</script>
<style lang='less' scoped>
.van-card__tag {
    top: 0.17rem;
    left: 8px;
}

.van-tag {
    font-size: 0.07rem;
}

.desc {
    word-break: break-all;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    width: 100%;
    height: 0.28rem;
    font-size: 0.125rem;
    line-height: 0.15rem;
    padding: 0.02rem 0 0;
}

.van-grid-item__content--center {
    -webkit-box-align: start;
    align-items: start;
    -webkit-box-pack: start;
    justify-content: start;

    .van-col {
        font-size: 0.115rem;
    }
}

.van-card {
    padding: o !important;
}
.selfLabel {
    position: absolute;
    left: 8px;
    top: 0.15rem;
    font-size: 0.1rem;
    line-height: 0.12rem;
    color: #fff;
    padding: 0.04rem 0.1rem 0.04rem 0.04rem;
    border-radius: 0 999px 999px 0;
}
</style>