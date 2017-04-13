<template lang="html">
    <div class="CMain2">
    <form id="imgForm" method="post" enctype="multipart/form-data">  

        <textarea v-model="textArea" placeholder="检查结果..."></textarea>
        
        <div class="imgBox clearfix">
            <ul class="img-box clearfix" id="imgboxid">  
                <li v-for="src in imgSrc" v-bind:style="{ heigth: 100 + 'px' }">
                    <img v-bind:src="src" alt="">
                </li>
                <li v-bind:style="{ height: (width*0.138) + 'px' }">
                    <label class="imgSelect" for="xdaTanFileImg"></label>
                </li>
            </ul>  
            <input type="file" id="xdaTanFileImg"  multiple="multiple"  name="head_url"  v-on:change="xmTanUploadImg"  style="display: none;"/> 
        </div>

        <div class="inputArea">
            <label>备注：</label><input v-model="text" typeof="text" placeholder="备注...">
        </div> 
        <div class="scoreArea">
            <label>得分：</label>
            <input type="number">
        </div>
        <span @click="formdata">提交</span>
    </form>
    </div>
</template>
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
<script>
import {path_java} from '../common/variable.js'
    export default{
        name: 'CMain2',
        data(){
            return{
                width: window.innerWidth,
                imgMsg: {
                    imgSrc: [],
                    imgWidth: []
                }
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


                // if(this.textArea != ''){
                //     var formData = new FormData($( "#imgForm" )[0]);
                //     // formData.append("textArea",this.textArea);
                //     // formData.append("text",this.text);
                //     $.ajax({  
                //       url: 'http://10.11.0.206:8866/CrmApp/crm2/updateImage.do' ,  
                //       type: 'POST',  
                //       data: formData,  
                //       async: false,  
                //       cache: false,  
                //       contentType: false,  
                //       processData: false,  
                //       success: function (returndata) {  
                //           console.log(returndata);  
                //       },  
                //       error: function (returndata) {  
                //           console.log(returndata);  
                //       }  
                //     });
                // }else{
                //     alert('请输入检查结果！')
                // }

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
                var imgWidth = this.imgWidth;
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
                    imgWidth.push(width*0.138);

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
                this.imgWidth = imgWidth;
            }
        }

    }
</script>
