<template>
  <div class="about">
    <!-- <van-nav-bar title="标题" left-text="返回" left-arrow @click-left="onClickLeft" /> -->
<div>商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题</div>
    <!-- <h1>This is an about page</h1> -->
  </div>
</template>
<script>
export default {
  name: "about",
  components: {},
  data() {
    return {};
  },
  methods: {
    onClickLeft() {
      Toast("返回");
    }
  }
};
</script>
<style>
.about div{
 text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>