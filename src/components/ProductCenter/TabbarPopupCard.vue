<template>
    <div class="TabbarPopupCard">
        <!-- 标签栏 -->
        <van-tabbar v-model="active">
            <van-tabbar-item @click="comprehensive">
                <span>综合</span>
            </van-tabbar-item>
            <van-tabbar-item @click="SalesVolumeFn">
                <span>销量</span>
            </van-tabbar-item>
            <van-tabbar-item @click="NewProducts">
                <span>新品</span>
            </van-tabbar-item>
            <van-tabbar-item @click="order">
                <span>价格</span>
                <span class="arrow-up-down">
                    <i :class="['van-icon',orderFT?'van-icon-arrow-up':'van-icon-arrow-down']"></i>
                </span>
            </van-tabbar-item>
            <van-tabbar-item
                @touchstart.native.stop="fieldShow = true"
                @click="showPopup"
                class="screen"
            >
                <span>筛选</span>
                <van-icon name="filter-o" />
            </van-tabbar-item>
        </van-tabbar>

        <!-- 筛选弹出层 -->
        <van-popup
            v-model="show"
            position="right"
            :style="{ width: '80%', height:'100%'}"
            class="my-van-popup"
        >
            <div class="orderSection">价格区间</div>
            <div class="popup-van-field">
                <van-field
                    v-model="numberMin"
                    type="number"
                    maxlength="6"
                    input-align="center"
                    placeholder="最低价格"
                    size="percent30"
                    autofocus
                />
                <div class="van-cell--percent10">
                    <van-icon name="down" size="0.16rem" />
                </div>
                <van-field
                    v-model="numberMax"
                    type="number"
                    maxlength="6"
                    input-align="center"
                    placeholder="最高价格"
                    size="percent30"
                />
            </div>
            <div class="popup-van-row">
                <van-row>
                    <van-col span="12" @click="reset">重置</van-col>
                    <van-col span="12" @click="Determine">确定</van-col>
                </van-row>
            </div>
        </van-popup>
        <!-- 商品卡片 -->
        <div
            class="cardList"
            v-for="{tag,
                    price,
                    desc,
                    title,
                    thumb,
                    originPrice,
                    DetailsLink,
                    addToCart,
                    SalesVolume
                    } in cardList"
            :key="DetailsLink"
        >
            <van-card
                :tag="tag"
                :price="price"
                :desc="desc"
                :title="title"
                :thumb="thumb"
                :origin-price="originPrice"
                :SalesVolume="SalesVolume"
            >
                <div slot="footer">
                    <van-icon name="shopping-cart-o" size="0.14rem" />
                </div>
            </van-card>
        </div>
        <!-- 底部是否加载 -->
        <div class="LoadIf" v-if="prompt.code !== 0">{{prompt.LoadIf}}</div>
        <div class="LoadIf" v-else>
            <van-loading size="0.2rem" vertical>加载中...</van-loading>
        </div>
    </div>
</template>
<script>
export default {
    name: "TabbarPopupCard",

    data() {
        return {
            _cardList: [], //对 cardList 进行备份
            __cardList: [], //对 cardList 进行备份 备份
            _screenList: "", //筛选过后的商品
            _active: 0, //ME 点击按钮变绿 (状态备份)
            active: 0, //ME 点击按钮变绿
            orderFT: true, //ME 对价格进行排序(true升序.false降序)
            orderState: 0, //ME 对价格是否进行在次排序(0=未激活过 1=已激活过 2=激活中 )
            orderValue: "", //ME 价格排序后的数据
            show: false, //ME 筛选 面板弹出层
            numberMin: "", //ME 筛选 价格最低值
            numberMax: "", //ME 筛选 价格最高值
            _numberMin: "", //ME 筛选 价格最低值(备份)
            _numberMax: "", //ME 筛选 价格最高值(备份)
            prompt: {
                //后台返回是否有商品数据
                code: 0 //商品有数据
                // code: 1, //商品没数据(没有更多的商品)
                // LoadIf: "没有更多的商品"
                // code:2,  //商品没数据(没有此商品)
                // LoadIf:"没有此商品"
            },
            cardList: [
                //后台返回的商品数据
                {
                    tag: "新品", //标签 (新品/活动)
                    price: "3.00", //优惠价格
                    desc: "销量3", //商品名称
                    title: "1商品信息2商品信息3商品信息4商品信息5商品信息", //商品信息
                    thumb: "https://via.placeholder.com/300/", //商品图片地址
                    originPrice: "10.00", //商品原价格
                    DetailsLink: "要跳转时需要的数据", //需要跳转时的数据
                    addToCart: "加入购物车的数据", //加入购物车时的数据
                    SalesVolume: 3 //销量
                },
                {
                    tag: "新品",
                    price: "1.00",
                    desc: "销量1",
                    title: "1商品信息2商品信息3商品信息4商品信息5商品信息",
                    thumb: "https://via.placeholder.com/300/",
                    originPrice: "10.00",
                    DetailsLink: "要跳转时需要的数据2",
                    addToCart: "加入购物车的数据2",
                    SalesVolume: 1 //销量
                },
                {
                    tag: "活动",
                    price: "2.00",
                    desc: "销量2",
                    title: "1商品信息2商品信息3商品信息4商品信息5商品信息",
                    thumb: "https://via.placeholder.com/300/",
                    originPrice: "10.00",
                    DetailsLink: "要跳转时需要的数据3",
                    addToCart: "加入购物车的数据3",
                    SalesVolume: 2 //销量
                }
            ]
        };
    },
    methods: {
        comprehensive() {
            this._active = this.active;
            this.cardList = JSON.parse(this._cardList);
            if (this.orderState !== 0) {
                this.orderState = 1;
            }
        },
        SalesVolumeFn() {
            this._active = this.active;
            this.cardList = JSON.parse(this._cardList);
            this.cardList.sort((a, b) => b.SalesVolume - a.SalesVolume);
            if (this.orderState !== 0) {
                this.orderState = 1;
            }
        },
        NewProducts() {
            this._active = this.active;
            this.cardList = JSON.parse(this._cardList).filter(
                obj => obj.tag === "新品"
            );
            if (this.orderState !== 0) {
                this.orderState = 1;
            }
        },
        orderFn() {
            this.cardList = JSON.parse(this._cardList);
            this.cardList.sort((a, b) =>
                this.orderFT
                    ? Number(a.price) - Number(b.price)
                    : Number(b.price) - Number(a.price)
            );
            this.orderState = 2;
            this.orderValue = this.cardList;
        },
        order() {
            this._active = this.active;
            if (this.orderState === 0) {
                this.orderFn();
                return;
            }
            if (this.orderState === 1) {
                this.orderState = 2;
                this.cardList = this.orderValue;
                return;
            }
            if (this.orderState === 2) {
                this.orderFT = !this.orderFT;
                this.orderFn();
            }
        },
        showPopup() {
            this.show = true;
            setTimeout(() => {
                document
                    .getElementsByClassName("van-overlay")[0]
                    .addEventListener("click", this.noScreen);
            }, 30);
        },
        noScreen() {
            // 点击筛选弹出层 外面
            // 隐藏 筛选面板弹出层
            this.show = false;
            // 未对区间数据进行修改,将原 选项 激活
            this.active = this._active;
            if (this._numberMin !== "" || this._numberMax !== "") {
                // 把备份值给正室
                this.numberMin = this._numberMin;
                this.numberMax = this._numberMax;
            } else {
                document.getElementsByClassName("screen")[0].id = "";
            }
        },
        reset() {
            // 对区间数据进行重置
            this.numberMin = this.numberMax = "";
        },
        Determine() {
            if (this.numberMin != "" || this.numberMax != "") {
                // 有价格区间时 搜索
                // ajax this.numberMin this.numberMax

                this._screenList = JSON.stringify([
                    {
                        tag: "新品", //标签 (新品/活动)
                        price: "3.00", //优惠价格
                        desc: "销量3", //商品名称
                        title: "1商品信息2商品信息3商品信息4商品信息5商品信息", //商品信息
                        thumb: "https://via.placeholder.com/300/", //商品图片地址
                        originPrice: "10.00", //商品原价格
                        DetailsLink: "要跳转时需要的数据", //需要跳转时的数据
                        addToCart: "加入购物车的数据", //加入购物车时的数据
                        SalesVolume: 3 //销量
                    },
                    {
                        tag: "活动",
                        price: "1.00",
                        desc: "销量1",
                        title: "1商品信息2商品信息3商品信息4商品信息5商品信息",
                        thumb: "https://via.placeholder.com/300/",
                        originPrice: "10.00",
                        DetailsLink: "要跳转时需要的数据2",
                        addToCart: "加入购物车的数据2",
                        SalesVolume: 1 //销量
                    }
                ]);
                // 对返回的数据进行备份处理
                this.__cardList = this._cardList;
                this._cardList = this._screenList;
                // 对价格区间进行备份
                this._numberMin = this.numberMin;
                this._numberMax = this.numberMax;
                // 有 筛选 搜索区间 添加 screen的id
                document.getElementsByClassName("screen")[0].id = "screen";
                // 对数据进行价格显示激活
                this.active = 3;
                // 对数据进行价格排序
                this.orderFn();
            } else {
                // 没有价格区间时 退出搜索
                // 没有 筛选 搜索区间 删除 screen的id
                document.getElementsByClassName("screen")[0].id = "";
                // 没有 筛选 搜索区间 对所有区间数据进行删除
                this.numberMin = this.numberMax = this._numberMin = this._numberMax =
                    "";
                // 重置区间数据后对备份数据进行删除
                this._screenList = "";

                // 未对区间数据进行修改,将原 选项 激活
                this.active = this._active;
                if (this.__cardList) {
                    // 重置后对原数据进行还原
                    this.active = 0;
                    this.cardList = JSON.parse(this.__cardList);
                    this._cardList = this.__cardList;
                }
            }
            // 隐藏 筛选面板弹出层
            this.show = false;
        }
    },
    mounted: function() {
        //加载完成后进行数据复制
        this._cardList = JSON.stringify(this.cardList);
    }
};
</script>
<style lang='less' scoped>
.van-tabbar--fixed {
    position: initial;
    .van-tabbar-item {
        font-size: 0.13rem;
    }
    .van-tabbar-item--active {
        color: #07c160;
    }
    #screen {
        color: #07c160;
    }
}
.van-image__img {
    border-radius: 0px !important;
}
.van-card {
    background-color: #fff !important;
    position: relative;
}
.van-card__price,
.van-card__price-integer {
    font-size: 0.12rem;
}
.van-card__origin-price {
    font-size: 0.09rem;
}
.van-button--mini {
    display: inline-block;
    min-width: 0;
    height: 0;
}
.van-button--default {
    border: 0;
}
.van-card__footer {
    position: absolute;
    bottom: 0.1rem;
    right: 0.1rem;
}
.van-card__footer .van-icon {
    transform: rotateY(180deg);
    padding: 0.1rem 0.1rem 0.04rem;
}
.van-card__thumb {
    width: 0.9rem;
    height: 0.9rem;
    margin-right: 0.1rem;
}
.van-card__content {
    font-size: 0.15rem;

    .van-card__bottom {
        height: 0.2rem;
    }
}
.van-card__header {
    padding-bottom: 0.05rem;
    border-top: 0;
    border-left: 0;
    border-right: 0;
}
.van-card__header .van-card__tag {
    top: 0.05rem;
}
.van-card__title,
.van-card__desc {
    max-height: 0.15rem;
    line-height: 0.16rem;
}
.van-card__desc {
    margin: 0.08rem 0 0;
    max-height: 0.32rem;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    white-space: normal;
}
.LoadIf {
    text-align: center;
    font-size: 0.08rem;
    color: #444;
    background-color: #e6e6e6;
    padding: 0.15rem 0;
}
.my-van-popup {
    .orderSection {
        margin: 0.1rem;
        font-size: 0.1rem;
    }
    .popup-van-field {
        display: flex;
        margin: 0.1rem 0 0.1rem 0.1rem;
        .van-cell--percent30 {
            display: inline-block;
            width: 30%;
            font-size: 0.1rem;
            padding: 0.02rem;
        }
        .van-cell--percent10 {
            display: block;
            width: 10%;
            position: relative;
            i {
                // display: flex;
                // line-height: 0.16rem;
                // margin: 0.05rem 0;
                position: absolute;
                top: 50%;
                left: 50%;
                margin: -0.08rem;
            }
        }
        .van-icon-down {
            transform: rotateZ(-90deg);
        }
    }
    .popup-van-row {
        position: absolute;
        width: 100%;
        left: 0;
        bottom: 0;
        .van-row {
            width: 100%;
            color: #fff;
            font-size: 0.1rem;
            border: 0;
        }
        .van-row .van-col:nth-child(1) {
            background-color: #ccc;
        }
        .van-row .van-col:nth-child(2) {
            background-color: red;
        }
    }
}
</style>