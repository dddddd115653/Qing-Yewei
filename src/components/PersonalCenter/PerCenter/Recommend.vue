<template>
    <div class="Recommend">
        <!-- 推荐 -->
        <van-tabbar v-model="active">
            <van-tabbar-item>进行中的活动</van-tabbar-item>
            <van-tabbar-item>已结束的活动</van-tabbar-item>
        </van-tabbar>
        <!-- 发起 -->
        <div v-show="active==0" class="ongoing">
            <p>暂无活动,可以直接分享给好友哦</p>
            <img width="90%" src="https://www.baidu.com/img/bd_logo1.png" />
            <div>
                <button>立即分享</button>
                <button>保存图片</button>
            </div>
        </div>
        <!-- 参与 -->
        <div v-show="active==1" class="completed">
            <van-icon name="bag" />
            <p>您还没有参加活动哦,赶快去参加吧</p>
        </div>
    </div>
</template>
<script>
export default {
    name: "Recommend",
    data() {
        return {
            title: "推荐中心",
            active: 0
        };
    }
};
</script>
<style lang='less' scoped>
.Recommend {
    text-align: center;
    font-size: 0.1rem;
    .van-tabbar {
        height: 0.5rem;
        line-height: 0.5rem;
    }
    .van-tabbar--fixed {
        position: relative;
    }
    .van-tabbar-item {
        font-size: 0.1rem;
    }
    .van-tabbar-item--active {
        color: red;
        height: 0.5rem;
        border-bottom: 0.01rem red solid;
    }
    .ongoing {
        color: #646566;
        div {
            width: 90%;
            margin: 0.1rem auto;

            button {
                width: 45%;
                text-align: center;
                border: 0.01rem #ccc solid;
                background: none;
                margin: 0;
                padding: 0;
                outline: none;
                line-height: 0.3rem;
                font-size: 0.12rem;
            }
            button + button {
                background: #de4c74;
                border: 0.01rem #de4c74 solid;
                margin-left: 10%;
                color: #fff;
            }
        }
    }
    .completed {
        color: #646566;
        i {
            font-size: 1rem;
            color: gray;
            margin: 1rem 0 0;
        }
    }
}
</style>