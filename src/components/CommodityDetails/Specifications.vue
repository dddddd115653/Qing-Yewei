<template>
    <div class="Specifications" @click="Specifications">
        <span>请选择 规格</span>
        <i></i>

        <van-sku
            v-model="show"
            stepper-title="我要买"
            show-add-cart-btn
            reset-stepper-on-hide
            :sku="sku"
            :goods="goods"
            :hide-stock="sku.hide_stock"
            :initial-sku="initialSku"
            @buy-clicked="onBuyClicked"
            @add-cart="onAddCartClicked"
        >
            <!-- 自定义 sku-header-price -->
            <template #sku-header-price="props">
                <div class="van-sku__goods-price">
                    <span class="van-sku__price-symbol">￥</span>
                    <span class="van-sku__price-num">{{ props.price }}</span>
                </div>
            </template>

            <!-- 自定义 sku actions -->
            <template #sku-actions="props">
                <div class="van-sku-actions">
                    <van-button square size="large" type="warning" @click="onPointClicked">积分兑换</van-button>
                    <!-- 直接触发 sku 内部事件，通过内部事件执行 onBuyClicked 回调 -->
                    <van-button
                        square
                        size="large"
                        type="danger"
                        @click="props.skuEventBus.$emit('sku:buy')"
                    >买买买</van-button>
                </div>
            </template>
        </van-sku>
    </div>
</template>
<script>
export default {
    name: "Specifications",
    data() {
        return {
            show: false, //商品规格
            min: "1190", //销售价最低值
            max: "45600", //销售价最高值
            sku: {
                // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
                // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
                tree: [
                    {
                        k: "颜色", // skuKeyName：规格类目名称
                        v: [
                            {
                                id: "30349", // skuValueId：规格值 id
                                name: "红色", // skuValueName：规格值名称
                                imgUrl: "https://img.yzcdn.cn/1.jpg", // 规格类目图片，只有第一个规格类目可以定义图片
                                previewImgUrl: "https://img.yzcdn.cn/1p.jpg" // 用于预览显示的规格类目图片
                            },
                            {
                                id: "1215",
                                name: "蓝色",
                                imgUrl: "https://img.yzcdn.cn/2.jpg",
                                previewImgUrl: "https://img.yzcdn.cn/2p.jpg"
                            }
                        ],
                        k_s: "s1" // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
                    }
                ],
                // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
                list: [
                    {
                        id: 2259, // skuId，下单时后端需要
                        price: 200, // 价格（单位分）
                        s1: "1215", // 规格类目 k_s 为 s1 的对应规格值 id
                        s2: "1193", // 规格类目 k_s 为 s2 的对应规格值 id
                        s3: "0", // 最多包含3个规格值，为0表示不存在该规格
                        stock_num: 110 // 当前 sku 组合对应的库存
                    },
                    {
                        id: 25, // skuId，下单时后端需要
                        price: 200, // 价格（单位分）
                        s1: "1215", // 规格类目 k_s 为 s1 的对应规格值 id
                        s2: "1193", // 规格类目 k_s 为 s2 的对应规格值 id
                        s3: "0", // 最多包含3个规格值，为0表示不存在该规格
                        stock_num: 110 // 当前 sku 组合对应的库存
                    }
                ],
                price: "", // 默认价格（单位元）
                stock_num: 227, // 商品总库存
                collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
                none_sku: false, // 是否无规格商品
                hide_stock: false // 是否隐藏剩余库存
            },
            // properties: {
            //     // 商品属性
            //     k_id: 123, // 属性id
            //     k: "尺寸", // 属性名
            //     is_multiple: false, // 是否可多选
            //     v: [
            //         {
            //             id: 1222, // 属性值id
            //             name: "珍珠", // 属性值名
            //             price: 1 // 属性值加价
            //         },
            //         {
            //             id: 1223,
            //             name: "椰果",
            //             price: 1
            //         }
            //     ]
            // },

            initialSku: {
                // 对象结构
                // 键：skuKeyStr（sku 组合列表中当前类目对应的 key 值）
                // 值：skuValueId（规格值 id）
                s1: "30349",
                s2: "1193",
                // 初始选中数量
                selectedNum: 1,
                // 初始选中的商品属性
                // 键：属性id
                // 值：属性值id列表
                selectedProp: {
                    123: [1222]
                }
            },
            goods: {
                // 默认商品 sku 缩略图
                picture: "https://img.yzcdn.cn/1.jpg"
                // title: "美国伽力果（约680g/3个）",
                // price: 2680,
                // express: "免运费",
                // remain: 19,
                // thumb: []
            }

            // skuData: {
            //添加购物车和点击购买回调函数接收的 skuData 对象结构
            // 商品 id
            // goodsId: "",
            // 选择的商品数量
            // selectedNum: 1
            // 选择的 sku 组合
            // selectedSkuComb: {
            //     id: 2257,
            //     price: 100,
            //     s1: "",
            //     s2: "",
            //     s3: ""
            // stock_num: 111, //现货
            // properties: [
            //     //商品属性
            //     {
            //         k_id: 123,
            //         k: "加料",
            //         is_multiple: true,
            //         v: [
            //             {
            //                 id: 1223,
            //                 name: "椰果",
            //                 price: 1
            //             }
            //         ]
            //     }
            // ]
            // property_price: 1 //商品价格
            // }
            // }
        };
    },
    created() {
        this.sku.price = this.min + ".00~" + this.max + ".00";
    },
    methods: {
        Specifications() {
            this.show = !this.show;
        },
        onBuyClicked(data) {
            this.$toast("buy:" + JSON.stringify(data));
            console.log(JSON.stringify(data));
            console.log(data);
        },
        onAddCartClicked(data) {
            this.$toast("add cart:" + JSON.stringify(data));
        },
        onPointClicked() {},
        sorry() {}
    }
};
</script>
<style lang='less' scoped>
.van-sku-messages {
    display: none;
}
.demo-sku {
    .sku-container {
        padding: 0 15px;
    }
}
</style>