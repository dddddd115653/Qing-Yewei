<template>
    <div>
        <div class="CommentList">
            <div
                v-for="{portrait, //用户头像
                    user, //用户名
                    val, //评论的内容
                    time,
                    specifications,
                    commentImg
                    } in commentList"
                :key="time"
            >
                <p>
                    <img :src="portrait" alt srcset />
                    {{user}}
                    <i>{{getDate_(time)}}</i>
                </p>
                <div>{{val}}</div>
                <div v-if="commentImg">
                    <img
                        v-for="(item,i) in commentImg"
                        :key="i"
                        :src="item"
                        @click="preview(commentImg,i)"
                    />
                </div>
                <font>{{specifications}}</font>
            </div>
            <div class="noMore">没有更多了</div>
        </div>
        <!-- 图片预览 -->
        <van-image-preview v-model="show" :images="images"></van-image-preview>
    </div>
</template>
<script>
import { ImagePreview } from "vant";
export default {
    name: "CommentList",
    data() {
        return {
            title: "评论列表",
            commentList: [
                //按评论时间戳添加
                {
                    portrait: "https://via.placeholder.com/300/c51414", //用户头像
                    user: "网易胡椒", //用户名
                    val:
                        "用户超时，系统自动好评。用户超时，系统自动好评。用户超时，系统自动好评。用户超时，系统自动好评。用户超时，系统自动好评。", //评论的内容
                    time: 1586079198929, //时间戳(数字类型)
                    specifications: "360G*2+320G礼盒装/姜汁红枣组合"
                    // commentImg: [
                    //     "https://img.yzcdn.cn/vant/apple-1.jpg",
                    //     "https://img.yzcdn.cn/vant/apple-1.jpg"
                    // ] //评论的图片(有图片时直接传,没有则不传)
                },
                {
                    portrait: "https://via.placeholder.com/300/262626", //用户头像
                    user: "网易胡椒", //用户名
                    val:
                        "用户超时，系统自动好评。用户超时，系统自动好评。用户超时，系统自动好评。用户超时，系统自动好评。用户超时，系统自动好评。", //评论的内容
                    time: 1542274800000, //时间戳(数字类型)
                    specifications: "360G*2+320G礼盒装/姜汁红枣组合",
                    commentImg: [
                        "https://img.yzcdn.cn/vant/apple-1.jpg",
                        "https://img.yzcdn.cn/vant/apple-1.jpg",
                        "https://img.yzcdn.cn/2.jpg",
                        "https://img.yzcdn.cn/vant/apple-1.jpg",
                        "https://img.yzcdn.cn/vant/apple-1.jpg"
                    ] //评论的图片(有图片时直接传,没有则不传)
                },
                {
                    portrait: "https://via.placeholder.com/300/266", //用户头像
                    user: "网易胡椒", //用户名
                    val:
                        "用户超时，系统自动好评。用户超时，系统自动好评。用户超时，系统自动好评。用户超时，系统自动好评。用户超时，系统自动好评。", //评论的内容
                    time: 1542276800500, //时间戳(数字类型)
                    specifications: "360G*2+320G礼盒装/姜汁红枣组合",
                    commentImg: [
                        "https://img.yzcdn.cn/vant/apple-1.jpg",
                        "https://img.yzcdn.cn/vant/apple-1.jpg",
                        "https://img.yzcdn.cn/2.jpg"
                    ] //评论的图片(有图片时直接传,没有则不传)
                }
            ],
            show: false,
            images: []
        };
    },
    methods: {
        //转换年月日方法
        getDate_(d) {
            let oDate = new Date(d),
                oYear = oDate.getFullYear(),
                oMonth = oDate.getMonth() + 1,
                oDay = oDate.getDate(),
                oMonth_ = parseInt(oMonth) < 10 ? "0" + oMonth : oMonth,
                oDay_ = parseInt(oDay) < 10 ? "0" + oDay : oDay,
                oTime = oYear + "." + oMonth_ + "." + oDay_; //最后拼接时间
            return oTime;
        },
        //图片预览
        preview(imgs, index) {
            ImagePreview({
                images: imgs,
                showIndex: false, //是否显示页码
                loop: false, //是否循环
                startPosition: index, //指定图片预览起始位置索引
                closeOnPopstate: true //页面回退时关闭预览
            });
        }
    }
};
</script>
<style lang='less' scoped>
.CommentList {
    background: #fff;
    i {
        font-style: normal;
    }
    > div {
        padding: 0.1rem;
        margin: 0 0 0.1rem;
        position: relative;
        &:after {
            content: " ";
            position: absolute;
            left: 0;
            bottom: -0.1rem;
            width: 100%;
            height: 0.07rem;
            background-color: #e6e6e6;
        }
        p {
            font-size: 0.11rem;
            line-height: 0.2rem;
            img {
                width: 0.2rem;
                height: 0.2rem;
                border-radius: 50%;
                float: left;
                margin-right: 0.1rem;
            }
            i {
                float: right;
                color: #828282;
                font-size: 0.08rem;
            }
        }
        div {
            font-size: 0.1rem;
            line-height: 0.15rem;
            img {
                width: 0.8rem;
                height: 0.8rem;
                margin: 0.05rem 0.2rem 0.05rem 0;
            }
        }
        font {
            color: #828282;
            font-size: 0.08rem;
            line-height: 0.15rem;
        }
    }
    .backgrou {
        background-color: #e6e6e6;
        height: 0.1rem;
        padding: 0;
    }
    .noMore {
        color: #828282;
        font-size: 0.07rem;
        text-align: center;
        background-color: #e6e6e6;
    }
}
</style>
<style lang='less'>
.van-image-preview__index {
    top: 0.2rem;
    font-size: 0.1rem;
    line-height: 0.2rem;
}
</style>