<template>
    <div class="Home">
        <Header></Header>
        <Swipe :randomColor="randomColor"></Swipe>
        <Classify></Classify>
        <Classification :randomColor="randomColor"></Classification>
        <MySearch></MySearch>
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
    methods: {
        randomColor() {
            return Math.random()
                .toString(16)
                .slice(2, 8);
        }
    }
};
</script>