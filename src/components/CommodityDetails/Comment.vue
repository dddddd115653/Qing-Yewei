<template>
    <div class="comment">
        <p>
            商品评论
            <i @click="MoreCommentVal">{{commentNum}}条评论</i>
        </p>
        <div :class="[{ left_: commentVal.commentImg }, 'left']">
            <p>
                <img :src="commentVal.portrait" />
                {{commentVal.user}}
            </p>
            <img class="commentImg" v-if="commentVal.commentImg" :src="commentVal.commentImg" />
            <div class="van-multi-ellipsis--l2">{{commentVal.val}}</div>
        </div>
        <div class="right" @click="MoreCommentVal">更多评论</div>
    </div>
</template>
<script>
export default {
    name: "Comment",
    data() {
        return {
            commentNum: 2, //多少条评论
            commentVal: {
                portrait: "https://img.yzcdn.cn/vant/apple-1.jpg", //用户头像
                user: "网易胡椒", //用户名
                val:
                    "用户超时，系统自动好评。用户超时，系统自动好评。用户超时，系统自动好评。用户超时，系统自动好评。用户超时，系统自动好评。" //评论的内容
                // commentImg: "https://img.yzcdn.cn/vant/apple-1.jpg" //评论的图片(第一张图片地址 有图片时直接传,没有则不传)
            }
        };
    },
    methods: {
        MoreCommentVal() {
            this.$router.push("CommentList");
        }
    }
};
</script>
<style lang='less' scoped>
.comment {
    display: inline-block;
    line-height: 0.2rem;
    i {
        float: right;
        color: #757575;
        &:after {
            content: ">";
            margin: 0 0 0 0.1rem;
        }
    }
    .left,
    .right {
        box-sizing: border-box;
        border: 0.01rem #ccc solid;
        float: left;
        height: 0.8rem;
    }
    .left {
        width: 72%;
        margin: 0 2% 0.08rem 0;
        padding: 0.05rem;
        p {
            height: 0.2rem;
            display: block;
            img {
                width: 0.2rem;
                height: 0.2rem;
                border-radius: 50%;
                margin: 0 0.2rem 0 0;
                float: left;
            }
        }
        .van-multi-ellipsis--l2 {
            margin: 0.13rem 0 0;
            line-height: 0.12rem;
            font-size: 0.08rem;
            color: #828282;
        }
        .commentImg {
            width: 0.7rem;
            height: 0.7rem;
            float: right;
        }
    }
    .left_ {
        p {
            width: 61%;
            display: inline-block;
        }
        .van-multi-ellipsis--l2 {
            width: 61%;
        }
    }
    .right {
        width: 26%;
        line-height: 0.8rem;
        text-align: center;
        color: #757575;
    }
}
</style>