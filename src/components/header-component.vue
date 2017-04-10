<template>
  <div class="header">
    <button></button>
    <h1>经销商星级评分</h1>
  </div>
</template>
<style lang="less" scoped>
@import "../less/variable.less";
p{
  width: 10rem;
}
</style>
<script>
  export default{
    name: 'headerComponent',
    data () {
      return {
        height: window.innerHeight
      }
    }
  }
</script>
