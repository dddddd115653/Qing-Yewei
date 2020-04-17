<template>
    <div class="swipe">
        <van-swipe @change="onChange" :autoplay="autoPlay">
            <van-swipe-item v-for="(image, index) in swipeImages" :key="index">
                <img v-lazy="image" width="100%" @click="preview(index)" />
            </van-swipe-item>
            <div class="custom-indicator" slot="indicator">{{ current + 1 }}/{{swipeImages.length}}</div>
        </van-swipe>

        <!-- 图片预览 -->
        <van-image-preview v-if="previewList" v-model="show"></van-image-preview>
    </div>
</template>
<script>
import { ImagePreview } from "vant";
export default {
    name: "Swipe",
    data() {
        return {
            // active: 0, //tabbar
            current: 0, //swipe
            swipeImages: [
                "https://img.yzcdn.cn/vant/apple-1.jpg",
                "https://img.yzcdn.cn/vant/apple-2.jpg",
                "https://img.yzcdn.cn/2.jpg",
                "https://img.yzcdn.cn/vant/apple-1.jpg",
                "https://img.yzcdn.cn/vant/apple-2.jpg",
                "https://img.yzcdn.cn/2.jpg"
            ],
            autoPlay: 3000, //自动循环时间
            previewList: true, //在商品页面加载图片预览(否则不加载)
            show: false //预览是否显示
        };
    },
    methods: {
        preview(index) {
            console.log(this);
            this.autoPlay = 60 * 60 * 1000;
            ImagePreview({
                images: this.swipeImages,
                loop: false, //是否循环
                startPosition: index, //指定图片预览起始位置索引
                closeOnPopstate: true, //页面回退时关闭预览
                onClose() {
                    console.log(this.autoPlay);
                    this.autoPlay = 30;
                    console.log(this.autoPlay);
                }
            });
        },
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