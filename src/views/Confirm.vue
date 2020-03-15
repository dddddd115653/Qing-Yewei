<template>
    <div class="Confirm">
        <Address></Address>
        <Detailed></Detailed>
        <LeavingMessage></LeavingMessage>
        <Money></Money>
    </div>
</template>
<script>
import Address from "@/components/Confirm/Address";
import Detailed from "@/components/Confirm/Detailed";
import LeavingMessage from "@/components/Confirm/LeavingMessage";
import Money from "@/components/Confirm/Money";
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
<style lang='less' scoped>
</style>