<template>
    <div>
        <van-tabbar v-model="active">
            <van-tabbar-item>图文详情</van-tabbar-item>
            <van-tabbar-item>商品属性</van-tabbar-item>
        </van-tabbar>
        <!-- 图文详情 -->
        <div v-show="active==0" class="detailsImg">
            <img v-for="(img,index) in detailsImg" :key="index" :src="img" />
        </div>
        <!-- 商品属性 -->
        <div v-show="active==1" class="attribute">
            <p v-for="{attribute,value} in attributeList" :key="attribute">
                <span>{{attribute}}</span>
                <i>{{value}}</i>
            </p>
        </div>
    </div>
</template>
<script>
export default {
    name: "DetailsImg",
    data() {
        return {
            active: 0, //(图文详情、商品属性)切换
            detailsImg: [
                //图文详情图片
                "https://img.yzcdn.cn/vant/apple-1.jpg",
                "https://img.yzcdn.cn/vant/apple-2.jpg",
                "https://img.yzcdn.cn/vant/apple-1.jpg",
                "https://img.yzcdn.cn/vant/apple-2.jpg"
            ],
            attributeList: [
                //商品属性信息
                {
                    attribute: "品牌",
                    value: "久宝隆"
                },
                {
                    attribute: "产地",
                    value: "中国.福建省福鼎市"
                },
                {
                    attribute: "生产许可证编号",
                    value: "SC11435098200211"
                },
                {
                    attribute: "产品标准号",
                    value: "GB/T22222"
                },
                {
                    attribute: "厂名",
                    value: "福鼎市嘿嘿股份有限公司"
                },
                {
                    attribute: "厂址",
                    value:
                        "福鼎市福鼎市福鼎市福鼎市(分装、紧压) 福鼎市福鼎市福鼎存(白茶生产)"
                },
                {
                    attribute: "厂家联系方式",
                    value: "000-1111111"
                },
                {
                    attribute: "保质期",
                    value: "5400天"
                },
                {
                    attribute: "茶种类",
                    value: "寿眉"
                },
                {
                    attribute: "级别",
                    value: "一级"
                },
                {
                    attribute: "净含量",
                    value: "300g"
                }
            ]
        };
    }
};
</script>
<style lang='less' scoped>
.detailsImg img {
    width: 100%;
    float: left;
}

.van-tabbar--fixed {
    position: relative;
    border-bottom: 0.01rem #ccc solid;
}
.van-tabbar-item {
    font-size: 0.08rem;
    line-height: 0.15rem;
}
.van-tabbar-item--active {
    color: red;
}
.attribute {
    background: #fff;
    font-size: 0.07rem;
    line-height: 0.2rem;
    p:nth-child(even) {
        background: #f3f3f3;
    }
    p {
        padding: 0 3%;
        color: #464646;
        span {
            float: left;
            width: 34%;
        }
        i {
            display: inline-block;
            width: 66%;
        }
    }
}
</style>