<template>
    <div class="Address">
        <router-link to="./ModifyAddress">
            <!-- <van-contact-card
                class="van-ellipsis"
                type="edit"
                name="张三从VB你们,门板;对方过后就哭了是对方过后就哭了双方各回家考虑"
                tel="13000000000"
                :editable="true"
            />-->
            <van-contact-card type="add" add-text="新建地址及联系人" />
        </router-link>
    </div>
</template>
<script>
export default {
    name: "",
    data() {
        return {};
    }
};
</script>
<style lang='less' scoped>
.Address {
    .van-contact-card--add .van-cell__left-icon {
        font-size: 0.15rem;
        color: #323233;
    }
    .van-cell,
    .van-contact-card__value {
        font-size: 0.1rem;
        line-height: 0.2rem;
    }
    .van-icon-add-square::before,
    .van-icon-contact::before {
        content: "\F07D";
    }
    .van-icon-contact::before {
        font-size: 0.1rem;
    }
}
</style>