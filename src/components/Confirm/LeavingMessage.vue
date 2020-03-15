<template>
    <div class="LeavingMessage">
        <van-field
            v-model="message"
            rows="2"
            autosize
            label="留言"
            type="textarea"
            maxlength="50"
            placeholder="给卖家留言：（50字以内）"
            show-word-limit
        />
    </div>
</template>
<script>
export default {
    name: "LeavingMessage",
    data() {
        return {
            message: ""
        };
    }
};
</script>
<style lang='less' scoped>
.LeavingMessage {
    width: 90%;
    padding: 0 5%;
    .van-cell {
        font-size: 0.09rem;
    }
    border-bottom: 0.01rem solid #ccc;
}
</style>