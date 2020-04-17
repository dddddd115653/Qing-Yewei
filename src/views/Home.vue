<template>
    <div class="Home">
        <Header></Header>
        <Swipe :randomColor="randomColor" :id="commodityId"></Swipe>
        <Classify></Classify>
        <Classification :randomColor="randomColor"></Classification>
        <MySearch></MySearch>
        <!-- 新品尝鲜/热销推荐/各地美食  循环 -->
        <Various :randomColor="randomColor"></Various>
        <Support></Support>
        <Tabbar></Tabbar>
    </div>
</template>
<script>
import Header from "@/components/Home/Header";
import Swipe from "@/components/Home/Swipe";
import Classify from "@/components/Home/Classify";
import Classification from "@/components/Home/Classification";
import MySearch from "@/components/Home/MySearch";
import Various from "@/components/Home/Various";
import Support from "@/components/Home/Support";
import Tabbar from "@/components/Tabbar";

export default {
    name: "home",
    components: {
        Header,
        Swipe,
        Classify,
        Classification,
        MySearch,
        Various,
        Support,
        Tabbar
    },
    data() {
        return {
            commodityId: this.$route.params.id
        };
    },
    methods: {
        randomColor() {
            return Math.random()
                .toString(16)
                .slice(2, 8);
        }
    }
};
</script>