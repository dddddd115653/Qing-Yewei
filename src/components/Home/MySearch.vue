<template>
    <!-- search 搜索 -->
    <van-search placeholder="坛子菜  血鸭红糖" />
</template>
<script>
export default {
    name: "MySearch"
};
</script>
<style lang='less' scoped>
.van-search__content {
    border-radius: 0.17rem;
}

.van-row {
    border-top: 0.01rem #d8d8d8 solid;
    border-bottom: 0.01rem #d8d8d8 solid;
    line-height: 0.28rem;

    .smallFont {
        font-size: 0.08rem;
        color: #5d5d5d;
    }
}
</style>