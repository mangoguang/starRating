<template>
  <div class="search" v-bind:style="{'min-height': height+'px'}">
    <div class="header">
        <head-left>
            <img src="../assets/2-back.png" @click="back">
        </head-left>
        <head-name>
            <p>经销商星级评分</p>
        </head-name>
        <head-right>
            <img src="../assets/2-history.png" @click="history">
        </head-right>
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
        <li>
            <router-link to="result">东莞市</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import "../less/variable.less";
.header{
    position: relative;
}
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
      line-height: .66667rem;
      background: #f0f0f0;
      float: left;
      padding: 0 .2rem;
      border-radius: .1066667rem;
        a{
            text-decoration: none;
            font-size: @f26;
            color: #666;
        }
    }
  }
}
</style>
<script>
// import headerComponent from '../components/header-component'
    import HeadLeft from '@/components/HeadLeft.vue'
    import HeadName from '@/components/HeadName.vue'
    import HeadRight from '@/components/HeadRight.vue'
  export default{
    name: 'search',
    components: { HeadLeft, HeadName, HeadRight },
    data () {
      return {
        height: window.innerHeight
      }
    },
    methods:{
        back() {
            this.$router.back();
        },
        history() {
            this.$router.push({ path: '/history '});
        }
    }
  }
</script>
