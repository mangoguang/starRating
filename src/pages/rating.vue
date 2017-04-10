<template>
  <div class="rating" v-bind:style="{'min-height': height+'px'}">
    <div class="header">
      <button class="back" v-on:click="back"></button>
      <h1>评星进行中123</h1>
    </div>

    <form id="form"  enctype="multipart/form-data">  
      <input type="file" id="xdaTanFileImg"  multiple="multiple"  name="fileAttach"  v-on:change="xmTanUploadImg(this)"/>  
      <input type="file" id=""  multiple="multiple1"  name="fileAttach1" v-on:change="imgInput"/>
      <div class="img-box" id="imgboxid">  

      </div>  
      
      <div id="xmTanDiv"></div><br/>  
      <div id="errordiv"   style="margin-top:15px;width:100%;text-align:center;">  
        <input id="bt" type="button" onclick="test(this)" value="提交" />   
      </div>  
    </form>
    
  </div>
</template>
<style lang="less" scoped>
@import "../less/variable.less";


</style>
<script>

  export default{
    name: 'rating',
    data () {
      return {
        height: window.innerHeight
      }
    },
    methods:{
      back:function(){
        this.$router.go(-1);
        return false;
      },
      imgInput:function(e){
        let file = e.target.files[0];
        var imgurl = e.target;
        console.log(e);
        console.log(imgurl);
      },
      //选择图片，马上预览  
      xmTanUploadImg:function(obj) { 
        console.log(obj); 
        // var fl=obj.file.length;  
        // for(var i=0;i<fl;i++){  
        //   var file=obj.files[i];  
        //   var reader = new FileReader();  
        //   //读取文件过程方法  
        //   reader.onloadstart = function (e) {  
        //       console.log("开始读取....");  
        //   }  
        //   reader.onprogress = function (e) {  
        //       console.log("正在读取中....");  
        //   }  
        //   reader.onabort = function (e) {  
        //       console.log("中断读取....");  
        //   }  
        //   reader.onerror = function (e) {  
        //       console.log("读取异常....");  
        //   }  
        //   reader.onload = function (e) {  
        //     console.log("成功读取....");  

        //     var imgstr='<img style="width:100px;height:100px;" src="'+e.target.result+'"/>';  
        //     var oimgbox=document.getElementById("imgboxid");  
        //     var ndiv=document.createElement("div");  

        //     ndiv.innerHTML=imgstr;  
        //     ndiv.className="img-div";  
        //     oimgbox.appendChild(ndiv);                 
        //   }  
        //   reader.readAsDataURL(file);   
        // }   
      }
    },
    mounted:function(){
      // xmTanUploadImg();
    }
  }
</script>
