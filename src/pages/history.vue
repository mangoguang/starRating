<template>
  <div class="search" v-bind:style="{'min-height': height+'px'}">
    <div class="header">
      <button class="back" v-on:click="back"></button>
      <h1>我的记录</h1>
    </div>

    <!-- 未完成评星 -->
    <div class="unfinished">
      <h3>未完成评星</h3>
      <ul>
        <li v-for="unFinishStore in unFinishStores">
          <p>{{unFinishStore}}</p>
          <span>2017.01.01</span>
        </li>
      </ul>
    </div>

    <!-- 已完成评星 -->
    <div class="finished">
      <h3>已完成评星</h3>
      <ul>
        <li class="clearfix" v-for="(finishStore,index) in finishStores">
          <div>
            <h4>{{finishStore}}</h4>
            <p>所属：特一二级城市</p>
            <p>日期：2017年4月6日</p>
          </div>
          <div>
            <h5>98<span>分</span></h5>
            <span v-bind:style="{background: 'url(../static/images/star'+starSum[index]+'.png) no-repeat'}"></span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import "../less/variable.less";

.unfinished{
  h3{
    margin-top: .2rem;
    background: url(../assets/3-gray star.png) no-repeat;
    background-size: auto .4rem;
  }
  ul{
    li{
      padding: .2rem 0;
      p{
        padding-right: 30%;
        line-height: 1.4em;
      }
      span{
        position: absolute;
        line-height: 1.4em;
        top: .2rem;
        right: 0;
      }
    }
  }
}
.finished{
  h3{
    margin-top: .3rem;
    background: url(../assets/3-yellow star.png) no-repeat; 
    background-size: auto .4rem;
  }
  ul{
    div{
      float: left;
      padding: .1rem 0;
      h4{
        font-size: @f32;
        color: #666;
        line-height: 1.6em;
      }
      p{
        font-size: @f22;
        line-height: 1.6em;
      }
    }
    div:first-child{
      width: 70%;
    }
    div:last-child{
      width: 30%;
      padding-top: .2rem;
      h5{
        font-size: .88rem;
        text-align: right;
        color: #ff7559;
        span{
          font-size: @f22;
          color: #ff7559;
        }
      }
      &>span{ 
        display: block; 
        width: 100%;
        height: .3466667rem;
        background-size: auto 100%!important;
        background-position: right 0 top 0!important;
      }
    }
  }
}
.unfinished,.finished{
  text-align: left;
  padding: 0 .4rem;
  h3{
    font-size: @f26;
    line-height: .66667rem;
    border-bottom: 1px solid #e5e5e5;
    padding-left: .5333rem;
    background-position: 0 center;
  }
  ul{
    li{
      font-size: @f32;
      line-height: .8rem;
      border-bottom: 1px solid #e5e5e5;
      position: relative;
    }
  }
}
</style>
<script>
// import headerComponent from '../components/header-component'

  export default{
    name: 'history',
    // components: {headerComponent},
    data () {
      return {
        height: window.innerHeight,
        unFinishStores: ['东莞市厚街镇3D专卖店东莞市厚街镇3D专卖店东莞市厚街镇3D专卖店','东莞市厚街镇v6专卖店'],
        finishStores: ['东莞市厚街镇3D专卖店东莞市厚街镇3D专卖店东莞市厚街镇3D专卖店','东莞市厚街镇v6专卖店','东莞市厚街镇3D专卖店','东莞市厚街镇v6专卖店'],
        starSum: [5,5,4,4]
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
