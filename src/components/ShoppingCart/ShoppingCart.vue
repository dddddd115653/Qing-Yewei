<template>
    <div class="ShoppingCart">
        <div class="head">
            <van-checkbox
                @click="checkAll"
                v-model="checked"
                label-disabled
                icon-size="0.1rem"
                checked-color="#07c160"
            ></van-checkbox>
            <van-cell title="乡野知味—中国特产优选平台" size="large">
                <router-link to="/">优惠券</router-link>
                <!-- <span></span> -->
            </van-cell>
        </div>
        <div class="carList">
            <van-checkbox-group v-model="result" ref="checkboxGroup">
                <div
                    class="cardList"
                    v-for="{
                            id,
                            src,
                            title,
                            price,
                            describe,
                            num,
                        } in commodities"
                    :key="id"
                >
                    <van-swipe-cell>
                        <van-checkbox
                            bind-group
                            @click="cardListCheckedFn(id)"
                            :name="id"
                            label-disabled
                            icon-size="0.1rem"
                            checked-color="#07c160"
                        >
                            <van-card
                                :price="price"
                                :desc="describe"
                                :title="title"
                                :thumb="src"
                                class="goods-card"
                            />
                            <div class="quantity">
                                <div class="addQuantity" @click="addQuantity(id)">＋</div>
                                <van-field
                                    v-model="num"
                                    type="digit"
                                    input-align="center"
                                    maxlength="3"
                                />
                                <div class="reduceQuantity" @click="reduceQuantity(id)">－</div>
                            </div>
                        </van-checkbox>
                        <van-button
                            @click="DeleteMerchandise(id)"
                            slot="right"
                            square
                            text="删除"
                            type="danger"
                            class="delete-button"
                        />
                    </van-swipe-cell>
                </div>
            </van-checkbox-group>
        </div>

        <van-submit-bar :price="total" button-text="提交订单" @submit="onSubmit" :loading="loading">
            <van-checkbox v-model="checked" checked-color="#07c160" @click="checkAll">全选</van-checkbox>
        </van-submit-bar>
    </div>
</template>

<script>
export default {
    name: "ShoppingCart",
    data() {
        return {
            total: 0, //总额 (单位:分)
            result: [], //当前选中的商品
            checked: false,
            loading: false, //提交订单后 加载
            commodities: [
                {
                    id: "123",
                    src: "https://img.yzcdn.cn/vant/cat.jpeg",
                    title: "这是",
                    price: "10.15",
                    describe: "10斤装",
                    num: 12,
                    checkedState: true
                },
                {
                    id: "546",
                    src: "https://img.yzcdn.cn/vant/cat.jpeg",
                    title:
                        "这是一段最多显示两行的文字，多余的内容会被省略一段最多显示两行的文字，多余的内容会被省略是一段最多显示两行的文字，多余的内容会被省略一段最多显示两行的文字，多余的内容会被省略是一段最多显示两行的文字，多余的内容会被省略一段最多显示两行的文字，多余的内容会被省略",
                    price: "5631.15",
                    describe: "10斤装",
                    num: 1,
                    checkedState: false
                },
                {
                    id: "13",
                    src: "https://img.yzcdn.cn/vant/cat.jpeg",
                    title: "这是",
                    price: "10.04",
                    describe: "10斤装",
                    num: 10,
                    checkedState: false
                }
            ]
        };
    },
    created() {
        this.commodities.forEach(a => {
            if (a.checkedState == true) {
                this.result.push(a.id);
            }
        });
        this.totalFn();
    },
    methods: {
        onSubmit() {
            this.loading = true;
            setTimeout(() => {
                this.$router.push({ name: "Confirm" });
            }, 2000);
        },
        checkAll() {
            this.$refs.checkboxGroup.toggleAll(!this.cardListChecked);
            this.commodities.forEach(
                a => (a.checkedState = this.cardListChecked)
            );
            this.cardListChecked = !this.cardListChecked;
            this.totalFn();
        },

        cardListCheckedFn(id) {
            setTimeout(() => {
                this.totalFn();
                if (this.result.find(item => item == id)) {
                    if (this.commodities.length == this.result.length) {
                        this.checked = true;
                        this.cardListChecked = true;
                        return;
                    }
                } else {
                    this.checked = false;
                    this.cardListChecked = false;
                }
            }, 3);
        },
        totalFn() {
            this.total = 0;
            this.result.forEach(item => {
                let check = this.commodities.find(id => id.id == item);

                if (check != undefined) {
                    this.total += Number(check.price) * 100 * check.num;
                }
            });
        },
        addQuantity(id) {
            let idd = this.commodities.find(a => a.id == id);
            idd.num++;
        },
        reduceQuantity(id) {
            let idd = this.commodities.find(a => a.id == id);
            if (idd.num > 1) {
                idd.num--;
            }
        },
        DeleteMerchandise(Value) {
            let _index;
            let idd = this.commodities.find((item, index, arr) => {
                _index = index;
                return item.id == Value;
            });
            this.commodities.splice(_index, 1);
            this.totalFn();
            //把 idd 发给后台删除
        }
    }
};
</script>
<style lang='less'>
.ShoppingCart {
    .head {
        display: flex;

        .van-cell {
            width: 85%;

            padding: 0 0 0 0.08rem;
            .van-cell__title {
                font-size: 0.08rem;
                line-height: 0.28rem;
            }
            .van-cell__value {
                font-size: 0.08rem;
                line-height: 0.28rem;
                float: right;
            }
        }
        .van-checkbox {
            display: inline;
        }
        .van-checkbox__icon.van-checkbox__icon--round {
            width: 100%;
            height: 100%;
            display: flex;
            // padding: 0.11rem 0 0;
            i {
                margin: 0.11rem auto 0;
            }
        }
        .van-checkbox.van-checkbox--label-disabled {
            width: 10%;
        }
    }
    .van-checkbox__icon {
        width: 10%;
        i {
            margin: 0 auto;
        }
    }
    .carList {
        border-top: 0.005rem solid #ccc;
        .cardList + .cardList {
            .van-checkbox__label {
                border-top: 0.01rem solid #ccc;
            }
        }
        .van-button {
            height: 100%;
        }
    }
    .van-checkbox__label {
        width: 90%;
        margin: 0;
        position: relative;
        .van-card {
            background: #fff;
            font-size: 0.09rem;
            line-height: 0.1rem;
            .van-card__thumb {
                width: 30%;
            }
            .van-card__title,
            .van-card__desc {
                max-height: 0.2rem;
                line-height: 0.1rem;
            }
            .van-card__price {
                font-size: 0.07rem;
                line-height: 0.1rem;
                .van-card__price-currencyz.van-card__price-integer {
                    font-size: 0.08rem;
                    line-height: 0.1rem;
                }
            }
        }
        .quantity {
            position: absolute;
            bottom: 0.03rem;
            right: 0.1rem;
            font-size: 0.12rem;
            line-height: 0.21rem;
            text-align: center;
            .addQuantity {
                float: left;
                width: 0.3rem;
                height: 0.2rem;
                // font-size: 0.1rem;
                border: 0.01rem solid #ccc;
                // display: inline-block;
            }
            .van-cell.van-field {
                float: left;
                width: 0.3rem;
                padding: 0;
                border: 0.01rem solid #ccc;
                border-left: 0;
                border-right: 0;
                font-size: 0.12rem;

                .van-field__value {
                    display: contents;
                }
                .van-field__body {
                    height: 0.2rem;
                }
            }
            .reduceQuantity {
                float: left;
                width: 0.3rem;
                height: 0.2rem;
                border: 0.01rem solid #ccc;
            }
        }
    }
    .van-submit-bar .van-checkbox__label {
        margin: 0 0 0 0.15rem;
    }
}
</style>