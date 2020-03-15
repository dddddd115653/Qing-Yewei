<template>
    <van-row>
        <van-col span="5" offset>
            <van-icon name="bars" />分类
        </van-col>
        <van-col span="14" offset>
            <van-search placeholder="请输入搜索的商品" />
        </van-col>
        <van-col span="5" offset>
            <van-icon name="bar-chart-o" />列表
        </van-col>
    </van-row>
</template>
<script>
export default {
    name: "ProductCenterSearch"
};
</script>
<style lang='less'>
.van-row {
    text-align: center;
    color: #5d5d5d;
    border-bottom: 0.01rem #d8d8d8 solid;
    font-size: 0.08rem;
    background-color: #fff;
    .van-col {
        padding: 0.08rem 0;
        i {
            font-size: 0.22rem;
        }
        .van-search {
            padding: 0;
            * {
                height: 0.3rem;
            }
            .van-cell {
                padding: 0;
            }
            i {
                line-height: 0.3rem;
            }
            .van-search__content {
                border-radius: 0.05rem;
                .van-field__control {
                    line-height: 0.2rem;
                    font-size: 0.1rem;
                }
            }
        }
    }

    .van-field__left-icon .van-icon,
    .van-field__right-icon .van-icon {
        font-size: 0.17rem;
    }

    i {
        display: block;
    }
}
</style>