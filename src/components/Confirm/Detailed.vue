<template>
    <div class="Detailed">
        <van-cell title="购物清单" icon="description" />
        <div class="list">
            <div
                class="caList"
                v-for="{
                id,
                img,
                num,
                price,
                describe,
                title} in list"
                :key="id"
            >
                <router-link to="id">
                    <van-card
                        :num="num"
                        :price="price/100"
                        :desc="describe"
                        :title="title"
                        :thumb="img"
                    />
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Detailed",
    data() {
        return {
            list: [
                {
                    id: 12,
                    img: "https://img.yzcdn.cn/vant/cat.jpeg",
                    num: "12",
                    price: 3209,
                    title: "这是",
                    describe: "10斤装"
                },
                {
                    id: 2,
                    img: "https://img.yzcdn.cn/vant/cat.jpeg",
                    num: "12",
                    price: 3209,
                    title:
                        "这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是这是",
                    describe: "10斤装"
                },
                {
                    id: 1,
                    img: "https://img.yzcdn.cn/vant/cat.jpeg",
                    num: "12",
                    price: 3209,
                    title: "这是",
                    describe: "10斤装"
                }
            ]
        };
    }
};
</script>
<style lang='less' scoped>
.Detailed {
    background: #fff;
    .van-cell {
        padding: 0 8%;
        line-height: 0.3rem;
        border-bottom: 0.001rem solid #6d6d6d;
        i {
            // margin: 0 0.1rem 0 -0.08rem;
            margin: 0 0.09rem 0 -0.15rem;
            font-size: 0.1rem;
            line-height: 0.3rem;
            float: left;
        }
        span {
            font-size: 0.1rem;
            color: #323233;
        }
    }
    .list {
        width: 90%;
        padding: 0 5%;
        .van-card {
            background-color: #fff;
            font-size: 0.1rem;
            line-height: 0.12rem;
            .van-card__thumb {
                margin-right: 0.12rem;
                width: 0.7rem;
                height: 0.7rem;
            }
            .van-card__desc,
            .van-card__title {
                line-height: 0.12rem;
                max-height: 0.22rem;
                width: 90%;
            }
            .van-card__title {
                font-weight: 700;
                color: #5a5a5a;
            }
            .van-card__desc {
                line-height: 0.23rem;
            }
            .van-card__price {
                font-size: 0.09rem;
                float: right;
                font-family: Avenir-Heavy, PingFang SC, Helvetica Neue, Arial,
                    sans-serif;

                .van-card__price-integer {
                    font-size: 0.11rem;
                    // font-style: normal;
                }
            }
            .van-card__num {
                position: absolute;
                top: 0.05rem;
                right: 0;
            }
        }
        .caList + .caList {
            border-top: 0.01rem solid #ccc;
        }
    }
}
</style>