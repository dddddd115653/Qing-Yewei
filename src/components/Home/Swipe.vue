<template>
    <div class="swipe">
        <van-swipe @change="onChange" :autoplay="3000">
            <van-swipe-item v-for="(image, index) in swipeImages" :key="index">
                <img v-lazy="image" width="100%" />
            </van-swipe-item>
            <div class="custom-indicator" slot="indicator">{{ current + 1 }}/{{swipeImages.length}}</div>
        </van-swipe>
    </div>
</template>
<script>
export default {
    name: "Swipe",
    data() {
        return {
            // active: 0, //tabbar
            current: 0, //swipe
            swipeImages: [
                "https://img.yzcdn.cn/vant/apple-1.jpg",
                "https://img.yzcdn.cn/vant/apple-2.jpg",
                `https://via.placeholder.com/300/${this.randomColor()}`,
                `https://via.placeholder.com/300/${this.randomColor()}`
            ]
        };
    },
    methods: {
        onChange(index) {
            this.current = index;
        }
    },
    props: ["randomColor"]
};
</script>
<style lang="less" scoped>
.van-swipe img {
    height: 1.8rem;
    display: block;
}

.custom-indicator {
    position: absolute;
    right: 0.07rem;
    bottom: 0.07rem;
    padding: 0.06rem;
    color: #fff;
    font-size: 0.13rem;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 50%;
}
</style>