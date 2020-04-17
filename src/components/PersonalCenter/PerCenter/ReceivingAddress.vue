<template>
    <div class="ReceivingAddress">
        <!-- <van-tabbar v-model="active">
            <van-tabbar-item>收货地址</van-tabbar-item>
            <van-tabbar-item>身份证信息</van-tabbar-item>
        </van-tabbar>
        <div v-show="active==0">
            <p>收货地址</p>
        </div>
        <div v-show="active==1">
            <p>身份证信息</p>
        </div>-->
        <van-radio-group v-model="chosenAddressId">
            <div
                class="watch"
                v-for="{id,
                        name,
                        tel,
                        address
                        } in list"
                :key="id"
            >
                <p>
                    <span>{{name}}</span>
                    {{tel}}
                </p>
                <p>{{address}}</p>
                <div class="edit">
                    <van-radio :name="id" icon-size="0.15rem" checked-color="#de4c74">
                        <span v-if="chosenAddressId != id">设为默认地址</span>
                        <span v-else>默认地址</span>
                    </van-radio>
                    <button @click="onDelete(id)">
                        <van-icon name="delete" />删除
                    </button>
                    <button @click="onEdit(id)">
                        <van-icon name="edit" />编辑
                    </button>
                </div>
            </div>
        </van-radio-group>
        <p @click="onEdit(0)">新增收货地址</p>
    </div>
</template>
<script>
import { Dialog } from "vant";
export default {
    name: "ReceivingAddress",
    data() {
        return {
            title: "收货地址",
            active: 0,
            chosenAddressId: "2",
            list: [
                {
                    id: "1",
                    name: "张三",
                    tel: "13000000000",
                    address:
                        "浙江省杭州市西湖区文杭州市西湖区文杭州市西湖区文杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室"
                },
                {
                    id: "2",
                    name: "李四",
                    tel: "1310000000",
                    address: "浙江省杭州市拱墅区莫干山路 50 号"
                }
            ]
        };
    },
    methods: {
        onEdit(id) {
            // id 为0时 时添加地址
            this.$router.push("EditAddress/" + id);
        },
        onDelete(id) {
            function beforeClose(action, done) {
                if (action === "confirm") {
                    console.log(id);
                    console.log("删除地址操作");
                    setTimeout(done, 1000);
                } else {
                    done();
                }
            }
            Dialog.confirm({
                message: "您确定删除此地址吗",
                beforeClose
            })
                .then(() => {
                    console.log(id);
                    // console.log("地址已删除");
                })
                .catch(() => {
                    // console.log("取消--删除地址");
                });
        }
    }
};
</script>
<style lang='less' scoped>
.ReceivingAddress {
    font-size: 0.1rem;
    // text-align: center;
    // .van-tabbar {
    //     height: 0.5rem;
    //     line-height: 0.5rem;
    // }
    // .van-tabbar--fixed {
    //     position: relative;
    // }
    // .van-tabbar-item {
    //     font-size: 0.1rem;
    // }
    // .van-tabbar-item--active {
    //     color: red;
    //     height: 0.5rem;
    //     border-bottom: 0.01rem red solid;
    // }
    > p {
        margin: 0.3rem 3%;
        background: #de4c74;
        color: #fff;
        text-align: center;
        line-height: 0.3rem;
    }
    div {
        .watch {
            background: #fff;
            margin: 0 0 0.1rem;
            padding: 0.1rem 3% 0;
            // font-size: 0.1rem;
            line-height: 0.2rem;
            p {
                margin: 0;
            }
            p + p {
                font-size: 0.08rem;
                line-height: 0.15rem;
            }
            .edit {
                border-top: 0.01rem #ccc solid;
                line-height: 0.3rem;
                margin: 0.1rem 0 0;
                padding: 0.1rem 0;
                color: #404040;
                .van-radio {
                    display: inline-flex;
                }
                button {
                    border: none;
                    background: none;
                    float: right;
                    line-height: 0.3rem;
                    padding: 0;
                }
                .van-icon {
                    line-height: 0.3rem;
                    float: left;
                    margin: 0 0.05rem 0 0.15rem;
                }
            }
        }
    }
}
</style>