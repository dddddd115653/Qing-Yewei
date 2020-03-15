<template>
    <div class="ProductCenter">
        <!-- 搜索 -->
        <Search></Search>
        <TabbarPopupCard></TabbarPopupCard>
    </div>
</template>

<script>
import Search from "@/components/ProductCenter/Search";
import TabbarPopupCard from "@/components/ProductCenter/TabbarPopupCard";
export default {
    name: "ProductCenter",
    components: {
        Search,
        TabbarPopupCard
    }
};
</script>
