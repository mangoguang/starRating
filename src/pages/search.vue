<template>
  <div class="search" v-bind:style="{'min-height': height+'px'}">
    <div class="header">
      <button class="back" v-on:click="back"></button>
      <h1>经销商星级评分</h1>
      <router-link class="" to="/history"></router-link>
    </div>

    <div class="picBox">
      <img src="../assets/2-pic.png" alt="">
    </div>

    <div class="searchBox">
      <input type="text" placeholder="请输入关键字（经销商名或地区）">
    </div>

    <div class="keyBox">
      <h3>关键字</h3>
      <ul class="clearfix">
        <li>东莞市</li>
      </ul>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import "../less/variable.less";

.search{
  background: @bgc;
}
.picBox{
  height: 2.66667rem;
  background: @fc;
  img{
    height: 1.3333rem;
    margin-top: .666667rem;
  }
}
.searchBox{
  height: 2.13333rem;
  background: @fc;
  input{
    display: block;
    width: 92%;
    height: 1.06667rem;
    margin: 0 auto;
    border-radius: 1.06667rem;
    background: @bgc;
    padding-left: .5333rem;
    box-sizing: border-box;
  }
}
.keyBox{
  text-align: left;
  padding-left: .4rem;
  h3{
    font-size: @f18;
    line-height: .77333rem;
    color: #999;
  }
  ul{
    li{
      font-size: @f26;
      color: #666;
      line-height: .66667rem;
      background: #f0f0f0;
      float: left;
      padding: 0 .2rem;
      border-radius: .1066667rem;
    }
  }
}
</style>
<script>
// import headerComponent from '../components/header-component'

  export default{
    name: 'search',
    // components: {headerComponent},
    data () {
      return {
        height: window.innerHeight
      }
    },
    methods:{
      back:function(){
        this.$router.go(-1);
        return false;
      }
    }
  }
</script>
