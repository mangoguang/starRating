<template lang="html">
    <div class="CMain2">
    <form id="imgForm" method="post" enctype="multipart/form-data">  

        <textarea v-model="textArea" name="result" placeholder="检查结果..."></textarea>
        
        <div class="imgBox clearfix">
            <ul class="img-box clearfix" id="imgboxid">  
                <li class="imgLi" v-for="src in imgSrc">
                    <img v-bind:src="src" alt="">
                </li>
                <li v-bind:style="{ heigth: 100 + 'px' }">
                    <label class="imgSelect" for="xdaTanFileImg"></label>
                </li>
            </ul>  
            <input type="file" id="xdaTanFileImg"  multiple="multiple"  name="head_url"  v-on:change="xmTanUploadImg"  style="display: none;"/> 
        </div>

        <div class="inputArea">
<!--             <label>备注：</label><input v-model="text" typeof="text" placeholder="备注..."> -->
        </div> 
<!--         <div class="scoreArea">
            <label>得分：</label>
            <input type="number">
        </div> -->
        <span @click="formdata">提交</span>
        <span @click="getFlowNumber">获取流水号</span>
    </form>
    </div>
</template>

<script>
import $ from 'n-zepto'
import {path_java} from '../common/variable.js'
    export default{
        name: 'CMain2',
        data(){
            return{
                width: window.innerWidth,
                imgMsg:[],
                imgSrc: [],
                textArea: '',
                text: ''
            }
        },
        methods:{
            getFlowNumber:function(){
                this.$http.jsonp(path_java+'getFlowNum.do', {
                  jsonp: 'jsoncallback',
                  params: {
                    store_id: 'ttt'
                  }
                })
                .then(function(data) {
                    console.log(data);
                })
            },
            formdata:function(){
                // this.$http.jsonp(path_java+'getFlowNumber.do', {
                //     jsonp: 'jsoncallback',
                //     params: {
                //     }
                //   })
                //   .then(function(data) {
                //     console.log(data);
                //   })


                if(this.textArea != ''){
                    var formData = new FormData($( "#imgForm" )[0]);
  // flownumber:
  // star: S1,
  // reverse1: C1,
  // status: false, //星级评价是否完成
  // table_sort: 1, //行号
  // model: , //评星模板
  // store_id: 1 - 3 HGL9, //店铺ID
  // store_name: '东莞-王美玉', //店铺名称
  // emp_num: '11608050', //评星人工号
  // ts: ,
  // score: 88, //此项分数
  // comments: '备注内容', //备注
  // result: '检查结果文本', //检查结果
  // img: '图片' //提交图片
                    formData.append("flownumber", '123456');
                    formData.append("star", 'S2');
                    formData.append("reverse1", 'C1');
                    formData.append("status", 1);
                    formData.append("table_sort", 2);
                    formData.append("model", 'M02');
                    formData.append("store_id", 'ttt');
                    formData.append("store_name",'do' );
                    formData.append("emp_num", '12111');
                    formData.append("score", 88);
                    formData.append("comments", '备注内容');
                    // formData.append("result", '检查结果内容');
                    $.ajax({  
                      url: 'http://10.11.0.206:8866/CrmApp/crm/updateImage.do' ,  
                      type: 'POST',  
                      data: formData,  
                      async: false,  
                      cache: false,  
                      contentType: false,  
                      processData: false,  
                      success: function (returndata) {  
                          console.log(returndata);  
                      },  
                      error: function (returndata) {  
                          console.log(returndata);  
                      }  
                    });
                }else{
                    alert('请输入检查结果！')
                }

                console.log(this.textArea);
                this.$emit('childFormData','success');
                return false;
            },
            xmTanUploadImg:function(obj) { 
                obj = obj.target;
                console.log(obj.files[0].name);
                var fl=obj.files.length; 
                // console.log(fl);
                var imgSrc = this.imgSrc;
                for(var i=0;i<fl;i++){  
                  var file=obj.files[i];  
                  // console.log(file);
                  var reader = new FileReader();  
                  // console.log(reader);
                  //读取文件过程方法  
                  reader.onloadstart = function (e) {  
                      console.log("开始读取....");  
                  }  
                  reader.onprogress = function (e) {  
                      console.log("正在读取中....");  
                  }  
                  reader.onabort = function (e) {  
                      console.log("中断读取....");  
                  }  
                  reader.onerror = function (e) {  
                      console.log("读取异常....");  
                  }  
                  reader.onload = function (e) {  
                    console.log("成功读取....");  

                    var src = e.target.result;
                    imgSrc.push(src);

                    // var imgstr='<img style="width:100px;height:100px;" src="'+e.target.result+'"/>';  
                    // var oimgbox=document.getElementById("imgboxid");  
                    // var ndiv=document.createElement("div");  

                    // ndiv.innerHTML=imgstr;  
                    // ndiv.className="img-div";  
                    // oimgbox.append(ndiv);                 
                  }
                  reader.readAsDataURL(file);   
                } 
                this.imgSrc = imgSrc; 
            }
        },
        mounted:function(){
            // $('.imgLi').css('height','200px');
        }

    }
</script>

<style lang="less" scoped>
@import "../less/variable.less";
    .CMain2{
        width: 92%;
        margin: 0 auto;
        textarea{
            resize: vertical;
            height: 2rem;
            display: block;
            padding: 0.27rem;
            width: 94%;
            background: #fafafa;
            border: 1px solid #e5e5e5;
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
            border-bottom: none;
            text-indent: 2em;
            font-size: 0.38rem;
            color: #666;
            overflow: auto;
        }
        span{
            display: block;
            width: 90%;
            margin: 1rem auto 0 auto;
            background: @fc;
            color: @subfc;
            font-size: @f34;
            line-height: 1.06667rem;
            border-radius: .1rem;
        }
        .imgBox{
            background: #fafafa;
            border-bottom-left-radius: 8px;
            border-bottom-right-radius: 8px;
            border: 1px solid #e5e5e5;
            border-top: none;
            padding-bottom: .2rem;
            .img-box{
                float: left;
                width: 100%;
                li{
                    float: left;
                    width: 15%;
                    height: 100px;
                    margin-right: 2%; 
                    margin-top: .2rem;
                }
                li:last-child{
                    margin-right: 0;
                }
                img{
                    width: 100%;
                    height: 100%;
                }
                label{
                    display: block;
                    width: 100%;
                    height: 100%;
                }
            }
            .imgSelect{
                float: left;
                display: block;
                width: 100%;
                height: 100%;
                background: url(../assets/6-camera.png) no-repeat;
                background-size: 100% 100%;
            }
        }
        .scoreArea{
            text-align: right;
            padding: 0.373rem;
            label{
                font-size: 0.38rem;
                color: #666;
            }
            input{
                width: 1.8rem;
                font-weight: bold;
                font-size: 0.51rem;
                color: #ff7559;
                border: none;
                outline: none;
                border-bottom: 2px solid #ff7559;
                text-align: center;
            }
        }
        .inputArea{
            width: 100%;
            height: 1.1rem;
            margin: 0.133rem auto auto;
            line-height: 1.1rem;
            text-align: left;
            background: #fafafa;
            border: 1px solid #e5e5e5;
            border-radius: 8px;
            label{
                margin-left: 0.27rem;
                font-size: 0.38rem;
                color: #666;
            }
            input{
                width: 82%;
                height: 1.1rem;
                font-size: 0.38rem;
                color: #999;
            }
        }
    }
</style>
<<<<<<< HEAD
<script>
import {path_java} from '../common/variable.js'
    export default{
        name: 'CMain2',
        data(){
            return{
                width: window.innerWidth,
                imgSrc: [],
                textArea: '',
                text: ''
            }
        },
        methods:{
            formdata:function(){
                console.log(this.width);
                // this.$http.jsonp(path_java+'getFlowNumber.do', {
                //     jsonp: 'jsoncallback',
                //     params: {
                //     }
                //   })
                //   .then(function(data) {
                //     console.log(data);
                //   })
=======
>>>>>>> fb223dde4180b967f4c4506422b9b3c37d059e92

