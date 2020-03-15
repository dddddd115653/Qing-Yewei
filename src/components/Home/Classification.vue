<template>
    <div class="classification">
        <van-grid :border="false" :column-num="3">
            <van-grid-item v-for="{src, tit} in classImages" :key="tit" text="分类">
                <van-image :src="src" />
                <van-col>{{tit}}</van-col>
            </van-grid-item>
        </van-grid>
    </div>
</template>
<script>
export default {
    name: "Classification",
    data() {
        return {
            classImages: [
                {
                    src: `https://via.placeholder.com/300/${this.randomColor()}`,
                    tit: "肉制品"
                },
                {
                    src:
                        "http://img2.spzs.com/group1/M00/33/E3/cnHoeV0S0ZCAdiJXAADISDl8wLE959.jpg",

                    tit: "酱坛菜"
                },
                {
                    src:
                        "http://img2.spzs.com/group1/M00/33/E3/cnHoeV0S0ZCAdiJXAADISDl8wLE959.jpg",

                    tit: "水产品"
                },
                {
                    src: `https://via.placeholder.com/300/${this.randomColor()}`,
                    tit: "水果蜜饯"
                },
                {
                    src: `https://via.placeholder.com/300/${this.randomColor()}`,
                    tit: "山珍海味"
                },
                {
                    src: `https://via.placeholder.com/300/${this.randomColor()}`,
                    tit: "滋补养颜"
                },
                {
                    src: `https://via.placeholder.com/300/${this.randomColor()}`,
                    tit: "糖酒茶油"
                },
                {
                    src: `https://via.placeholder.com/300/${this.randomColor()}`,
                    tit: "有机杂粮"
                },
                {
                    src: `https://via.placeholder.com/300/${this.randomColor()}`,
                    tit: "高端定制"
                }
            ]
        };
    },
    props: ["randomColor"]
};
</script>
<style lang='less' scoped>
.van-grid-item__content {
    padding: 0 21px 16px;
    .van-col {
        color: #3c3c3c;
        font-size: 0.12rem;
        margin: 0.03rem 0 0;
    }
}
</style>