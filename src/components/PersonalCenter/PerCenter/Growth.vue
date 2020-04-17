<template>
    <div class="Growth">
        <van-steps :active="active" active-color="#e6c71e" :style="steps">
            <van-step v-for="{grade,val} in grades" :key="grade">
                {{grade}}
                <font>({{val}})</font>
            </van-step>
        </van-steps>
        <div class="obtain">
            <p>成长值获取</p>
            <div>
                <van-icon name="bag" color="#e6c71e" />
                <span>每消费1元，获得1成长值</span>
                <router-link to="/">立即购买</router-link>
            </div>
        </div>
        <div class="bill">
            <p>
                当前积分
                <i>{{total}}</i>
                <span class="right">积分记录</span>
            </p>
            <div v-for="{time,integral,index} in totalList" :key="index">
                <span>+ {{integral}}</span>
                <span class="right">{{time}}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Growth",
    data() {
        return {
            active: 1, //当前等级
            steps: {
                backgroundImage:
                    "url(" + require("@/assets/images/growth.png") + ")",
                backgroundRepeat: "no-repeat",
                backgroundSize: "1000px 100px"
            },
            grades: [
                {
                    grade: "大众",
                    val: "300"
                },
                {
                    grade: "黄金",
                    val: "3000"
                },
                {
                    grade: "铂金",
                    val: "30000"
                },
                {
                    grade: "钻石",
                    val: "300000"
                }
            ],
            total: "3659326", //当前积分
            totalList: [
                {
                    time: "2564569523653", //时间戳
                    integral: "365"
                },
                {
                    time: "2564569523653", //时间戳
                    integral: "365"
                },
                {
                    time: "2564569523653", //时间戳
                    integral: "365"
                }
            ]
        };
    }
};
</script>
<style lang="less" scoped>
.Growth {
    .obtain {
        background: #fff;
        margin: 0.1rem 0;
        p {
            padding: 0 3%;
            margin: 0;
            font-size: 0.11rem;
            line-height: 0.4rem;
        }
        div {
            padding: 0.1rem 3%;
            border-top: 0.01rem #ccc solid;
            line-height: 0.2rem;
            i {
                font-size: 0.15rem;
                float: left;
                margin: 0 0.1rem 0 0;
            }
            span {
                font-size: 0.1rem;
            }
            a {
                color: #867100;
                float: right;
                font-size: 0.1rem;
                border: 0.01rem #867100 solid;
                padding: 0 0.1rem;
            }
        }
    }
    .bill {
        padding: 0 3%;
        background: #fff;
        font-size: 0.1rem;
        i {
            font-style: normal;
        }
        p {
            margin: 0;
            line-height: 0.3rem;
            font-weight: normal;
            border-bottom: 0.01rem #ccc solid;
        }
        .right {
            float: right;
            color: rgba(101, 101, 101, 0.8);
        }
        div {
            line-height: 0.2rem;
            color: red;
        }
        div + div {
            border-top: 0.01rem #ccc solid;
        }
    }
}
</style>
<style lang='less' >
.Growth {
    .van-steps--horizontal {
        padding: 0.3rem 0 0.5rem;
        overflow: auto;
        .van-steps__items {
            padding: 0 0.2rem;
            margin: 0;
            width: 120%;
        }
        .van-step--horizontal .van-step__circle-container {
            background-color: rgba(0, 0, 0, 0);
        }
        .van-step--finish .van-step__circle,
        .van-step--finish .van-step__line {
            background-color: #e6c71e;
        }
        .van-step__line {
            background-color: rgb(134, 113, 0);
        }
        .van-step__title {
            color: #fff;
            font-size: 0.12rem;
            position: relative;
            font {
                position: absolute;
                top: 0.3rem;
                left: -20%;
                font-size: 0.03rem;
            }
        }
    }
    .van-step--horizontal:last-child .van-step__circle-container {
        right: 0;
    }
    .van-step:last-child .van-step__line {
        width: 20px;
    }
    .van-steps__items
        .van-step--horizontal:last-child.van-step--process
        .van-step__line {
        background-color: #e6c71e;
    }
    .van-step--finish {
        .van-step__title {
            color: rgba(255, 255, 255, 0.8);
            font-size: 0.12rem;
        }
    }
}
</style>