<template>
    <div class="ShoppingCart">
        <div class="head">
            <van-checkbox
                @click.stop="checkAllStore"
                v-model="getChecked"
                label-disabled
                icon-size="0.1rem"
                checked-color="#07c160"
            ></van-checkbox>
            <van-cell title="乡野知味—中国特产优选平台" size="large">
                <router-link to="/">优惠券</router-link>
            </van-cell>
        </div>
        <van-checkbox-group v-model="getResult" ref="checkboxGroup">
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
                        @click.stop="cardListCheckedFn(id)"
                        :name="id"
                        label-disabled
                        icon-size="0.1rem"
                        checked-color="#07c160"
                    ></van-checkbox>

                    <van-card
                        :price="price"
                        :desc="describe"
                        :title="title"
                        :thumb="src"
                        class="goods-card"
                    />
                    <div class="quantity">
                        <div class="addQuantity" @click.stop="addQuantity(id)">＋</div>
                        <van-field v-model="num" type="digit" input-align="center" maxlength="3" />
                        <div class="reduceQuantity" @click.stop="reduceQuantity(id)">－</div>
                    </div>
                    <van-button
                        @click.stop="DeleteMerchandise(id)"
                        slot="right"
                        square
                        text="删除"
                        type="danger"
                        class="delete-button"
                    />
                </van-swipe-cell>
            </div>
        </van-checkbox-group>

        <van-submit-bar :price="total" button-text="提交订单" @submit="onSubmit" :loading="loading">
            <van-checkbox v-model="getChecked" checked-color="#07c160" @click="checkAllStore">全选</van-checkbox>
        </van-submit-bar>
    </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
    name: "ShoppingCart",
    data() {
        return {
            loading: false //提交订单后 加载
            //这样引用 不能实现双向绑定
            // result: this.$store.state.shoppingCart.result
            // checked: this.$store.state.shoppingCart.checked
        };
    },
    computed: {
        getChecked: {
            //因 v-model 所以要这样引用  实现双向绑定
            get() {
                return (this.checked = this.$store.state.shoppingCart.checked);
            },
            set(val) {
                if (val) {
                    this.checked = val;
                } else {
                    this.checked;
                }
            }
        },
        getResult: {
            get() {
                return (this.result = this.$store.state.shoppingCart.result);
            },
            set(val) {
                if (val) {
                    this.result = val;
                } else {
                    this.result;
                }
            }
        },
        ...mapState("shoppingCart", ["commodities", "total"])
    },

    created() {
        //进入页面 对选择及金额进行计算
        this.$store.commit("shoppingCart/setResult");
    },
    methods: {
        ...mapMutations("shoppingCart", [
            "addQuantity",
            "reduceQuantity",
            "totalFn",
            "checkAllStore",
            "cardListCheckedFn"
        ]),
        onSubmit() {
            //点击提交
            this.loading = true;
            setTimeout(() => {
                this.$router.push({ name: "Confirm" });
            }, 2000);
        }
    }
};
</script>
<style lang='less'>
.ShoppingCart {
    padding: 0 0 0.4rem;
    .head {
        background: #fff;
        display: flex;
        border-bottom: 0.005rem solid #ccc;

        .van-cell {
            width: 85%;

            padding: 0 0 0 0.08rem;
            .van-cell__title {
                font-size: 0.08rem;
                line-height: 0.28rem;
                display: contents;
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
            i {
                margin: 0.11rem auto 0;
            }
        }
        .van-checkbox.van-checkbox--label-disabled {
            width: 10%;
        }
    }
    .van-checkbox-group {
        background: #fff;
        .cardList {
            padding: 0.1rem 0;
        }
        .cardList + .cardList {
            border-top: 0.01rem #ccc solid;
        }
        .van-checkbox {
            width: 10%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            .van-checkbox__icon {
                width: 100%;
                i {
                    margin: 0 auto;
                }
            }
        }

        .van-card {
            margin: 0 0 0 10%;
            width: 90%;
            background: #fff;
            font-size: 0.09rem;
            line-height: 0.1rem;
            padding: 0;
            .van-card__thumb {
                width: 30%;
            }
            .van-card__title,
            .van-card__desc {
                max-height: 0.27rem;
                height: 0.27rem;
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
        .van-swipe-cell__wrapper {
            position: relative;
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
        .van-button {
            height: 100%;
        }
    }
    .van-submit-bar .van-checkbox__label {
        margin: 0 0 0 0.15rem;
    }
}
</style>