<template>
    <div class="classify">
        <van-grid :column-num="3">
            <van-grid-item icon="qr" text="全部宝贝" to="/ProductCenter" />
            <van-grid-item icon="bar-chart-o" text="宝贝分类" />
            <van-grid-item icon="after-sale" text="活动" />
        </van-grid>
    </div>
</template>
<script>
export default {
    name: "Classify"
};
</script>
<style lang="less" scoped>
.van-grid-item__content {
    padding: 0.05rem 0;
}

.van-grid-item__icon + .van-grid-item__text {
    margin: 0;
}

.van-grid-item__text {
    font-size: 0.11rem;
    line-height: 0.15rem;
    color: #232323;
}

.van-grid-item__icon,
.van-tabbar-item__icon {
    font-size: inherit !important;
}
</style>