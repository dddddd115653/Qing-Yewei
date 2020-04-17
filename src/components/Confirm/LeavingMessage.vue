<template>
    <div class="LeavingMessage">
        <van-field
            v-model="message"
            autosize
            label="买家留言"
            type="textarea"
            maxlength="50"
            :placeholder="placeholder"
            :readonly="this.state!=undefined"
            :show-word-limit="this.state==undefined"
        />
    </div>
</template>
<script>
export default {
    name: "LeavingMessage",
    props: ["state"],
    data() {
        return {
            // message:
            //     "买家留言买家留言买家留言买家留言买家留言买家留言言买家留言买家留言买家留言买家留言买家留言买家留言言",
            message: "", //买家留言 为空
            placeholder:
                this.state != undefined ? "" : "给卖家留言：（50字以内）"
        };
    }
};
</script>
<style lang='less' scoped>
.LeavingMessage {
    background: #fff;
    width: 90%;
    padding: 0 5%;
    border-bottom: 0.01rem solid #ccc;
    border-top: 0.01rem solid #ccc;
    .van-cell {
        font-size: 0.09rem;
        background: none;
    }
}
</style>