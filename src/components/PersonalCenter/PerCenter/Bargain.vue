<template>
    <div class="Bargain">
        <!-- 砍价 -->
        <van-icon name="birthday-cake-o" />
        <p>暂无活动商品</p>
    </div>
</template>
<script>
export default {
    name: "Bargain",
    data() {
        return {
            title: "砍价"
        };
    }
};
</script>
<style lang='less' scoped>
.Bargain {
    text-align: center;
    font-size: 0.1rem;
    line-height: 0.2rem;
    color: gray;
    i {
        font-size: 1rem;
        margin: 1rem 0 0;
    }
    p {
        margin: 0;
    }
}
</style>