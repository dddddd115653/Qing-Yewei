<template>
    <div class="vanRow">
        <van-row>
            <van-col span="3">
                <van-image round src="https://via.placeholder.com/300/ededde" />
            </van-col>
            <van-col span="21">
                <span class="platform">相知野味 — 中国特产优选平台</span>
            </van-col>
        </van-row>

        <div class="share">
            <van-icon name="share" size="0.1rem" color="#7b7b7b" />
            <div>分享</div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Header"
};
</script>
<style lang="less" scoped>
.van-row {
    padding: 0.1rem 0;
}
.van-image--round {
    width: 60%;
    margin: 0 auto;
    display: block;
}
.platform {
    padding: 0.02rem 0 0 0;
    font-size: 0.12rem;
}
.share {
    position: fixed;
    z-index: 9;
    right: 0.1rem;
    bottom: 0.8rem;
    display: block;
    background: #fff;
    width: 0.3rem;
    height: 0.3rem;
    border: 0.01rem solid #ccc;
    border-radius: 50%;
    i {
        position: absolute;
        left: 30%;
        top: 0.03rem;
    }
    div {
        position: absolute;
        left: 0.08rem;
        bottom: 0.03rem;
        font-size: 0.06rem;
        color: #3e3e3e;
    }
}
</style>