<template>
  <div class="ratingStart">
    <div class="header">
      <button class="back" v-on:click="back"></button>
      <h1>开始评星</h1>
    </div>
    
    <div class="storeMsgBox">
      <img src="../assets/5-pic.png">
      <h2>{{name}}</h2>
      <span>三-六级城市</span>
    </div>

    <ul class="stars clearfix">
      <li v-for="(star,index) in stars">
        <div class="starList" @click="starSelect(index,stars)" v-bind:style="{'background-image': 'url(../static/images/star'+(index+1)+'.png)'}"></div>
        <p>{{star}}</p>
      </li>
      <li class="startLi"><button class="startBtn" v-on:click="startRating">开始评星</button></li>
    </ul>
    
  </div> 
</template>
<style lang="less" scoped>
@import "../less/variable.less";
.storeMsgBox{
  background: $bgc;
  img{
    height: 1.33333rem;
    margin-top: 1.7rem;
  }
  h2{
    font-size: @f38;
    color: @subfc;
    line-height: 1.4em;
    padding: .2rem .4rem;
  }
  span{
    font-size: @f28;
    padding-left: .586667rem;
    background: url(../assets/5-cituy.png) no-repeat;
  }
}
ul.stars{
  padding: 0 .4rem;
  li{
    width: 32%;
    border: 1px solid #e5e5e5;
    border-radius: .133333rem;
    box-sizing: border-box;
    float: left;
    margin-right: 2%;
    margin-top: .24rem;
    position: relative;
    p{
      font-size: @f26;
      line-height: .8rem;
      border-top: 1px solid #e5e5e5;
      margin-top: 1.06667rem;
    }
    p:hover{
      color: @subfc;
    }
    div{
      width: 100%;
      height: 1.06667rem;
      padding-bottom: .8rem;
      position: absolute;
      top: 0;
      left: 0;
      background-repeat: no-repeat;
    }
  }
  li:nth-child(1) div:hover{
    background-image: url(../assets/unstar1.png)!important;
  }
  li:nth-child(2) div:hover{
    background-image: url(../assets/unstar2.png)!important;
  }
  li:nth-child(3) div:hover{
    background-image: url(../assets/unstar3.png)!important;
  }
  li:nth-child(4) div:hover{
    background-image: url(../assets/unstar4.png)!important;
  }
  li:nth-child(5) div:hover{
    background-image: url(../assets/unstar5.png)!important;
  }
  li:nth-child(1) div,li:nth-child(2) div,li:nth-child(3) div{
    background-size: auto .86667rem!important;
    background-position: center .1rem!important;
  }
  li:nth-child(4) div,li:nth-child(5) div{
    background-size: auto .41117rem!important;
    background-position: center .31111rem!important;
  }
  li:nth-child(3){
    margin-right: 0;
  }
  li:hover{
    background: @fc;
  }
}
li.startLi{
  width: 100%!important;
  box-sizing: border-box;
  border: none!important;
}
li.startLi:hover{
  background: none!important;
}
.startBtn{
  display: block;
  width: 100%;
  margin: .53333rem 0;
  color: @subfc;
  font-size: @f34;
  line-height: 1.066667rem;
  border-radius: .12rem;
  box-sizing: border-box;
  background: @fc;
}
</style>
<script>
import Vue from 'vue'
import vueResource from 'vue-resource'
  export default{
    name: 'search',
    data () {
      return {
        height: window.innerHeight,
        name: this.$route.params.name,
        stars: ['一星','二星','三星','四星','五星'],
        star: 0
      }
    },
    methods:{
      back:function(){
        this.$router.go(-1);
        return false;
      },
      starSelect:function(index,stars){
        this.star = index+1;
      },
      startRating:function(){
        // this.$router.push({ path: '/rating' });
        // http://10.11.0.206:8866/CrmApp/crm/getVerifyUserInfo.do?username=11610129&password=123456
        this.$http.jsonp('http://10.11.0.206:8866/CrmApp/crm/getModuleInfo.do', {
        // this.$http.jsonp('http://10.12.0.101/deruccimid/scanapp/finishedhouse', {
          jsonp: 'jsoncallback',
          params: {
            starlvlcode: 'S1',
            citylvlcode: 'C1'
          }
        })
        .then(function(data) {
          console.log(data);
          alert(JSON.stringify(data));
        })
        return false;
      }
    }
  }
</script>
