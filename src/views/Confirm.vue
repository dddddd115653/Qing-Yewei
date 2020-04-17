<template>
    <div class="Confirm">
        <Address></Address>
        <Detailed></Detailed>
        <LeavingMessage></LeavingMessage>
        <Money></Money>
    </div>
</template>
<script>
import Address from "@/components/Confirm/Address"; //收件地址
import Detailed from "@/components/Confirm/Detailed"; //购物清单
import LeavingMessage from "@/components/Confirm/LeavingMessage"; //商品留言
import Money from "@/components/Confirm/Money"; //支付信息
export default {
    name: "Confirm",
    components: {
        Address,
        Detailed,
        LeavingMessage,
        Money
    }
};
</script>