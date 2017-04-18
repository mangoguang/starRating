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
            <label>备注：</label><input name="comments" v-model="comments" typeof="text" placeholder="备注...">
        </div> 
        <div class="scoreArea">
            <label>得分：</label>
            <input name="score" v-model="score" type="number">
        </div>
        <span @click="formdata">提交</span>

        <span v-if="nextShow" class="now" @click="nextStar">下一评级</span>
        <span v-if="finish" class="now" @click="starFinish">下一评级</span>

    </form>
    </div>
</template>

<script>
import $ from 'n-zepto'
import {path} from '../common/variable.js'
    export default{
        name: 'CMain2',
        props: ['table'],
        data(){
            return{
                width: window.innerWidth,
                imgMsg:[],
                imgSrc: [],
                textArea: '',
                text: '',
                comments: '',
                score: '',
                status: 0,
                star: this.$route.params.star,//想要评星的等级
                city: this.$route.params.city,
                name: this.$route.params.name,
                id: this.$route.params.id,
                num: this.$route.params.num,
                flownum: this.$route.params.flownum,
                nextShow: false,
                finish: false
            }
        },
        watch:{
            //如果参数改变，则刷新组件，触发组件重新渲染。
            '$route' () {
                this.$router.go(0);
            }
        },
        methods:{
            //评星完成
            starFinish(){
                this.$router.push({ path: '/report'})
            },
            //跳转下一星级评星
            nextStar() {
                this.$router.push({ path: '/check/'+this.city+'/'+this.star+'/'+this.id+'/'+this.name+'/'+this.num+'/'+this.flownum+'/'+(parseInt(this.table.starLevel)+1)})
                this.$router.go(0);
            },
            //提交表单
            formdata:function(){
                if(this.textArea != ''){
                    if(this.score != 0){
                        var formData = new FormData($( "#imgForm" )[0]);
                        formData.append("flownumber", this.flownum);
                        formData.append("star", 'S'+this.table.starLevel);
                        formData.append("reverse1", this.city);
                        formData.append("status", this.status);
                        formData.append("table_sort", this.table.table_sort);
                        formData.append("model", this.table.model);
                        formData.append("store_id", this.id);
                        formData.append("store_name", this.name );
                        formData.append("emp_num", this.num);
                        var obj = {'name': 123};
                        $.ajax({  
                          url: path+'crm/updateImage.do' ,  
                          type: 'POST',  
                          data: formData,  
                          async: false,  
                          cache: false,  
                          contentType: false,  
                          processData: false,  
                          success: function (data) {
                              var obj = eval('(' + data + ')'); 
                              if(obj.status == 0){
                                alert('该部分数据已提交，请勿重复提交！');
                              }else if(obj.status == 1){
                                alert('数据提交成功！');
                              }
                          },  
                          error: function (data) {  
                              console.log(data);  
                          }  
                        });
                    }else{
                        alert('请输入分数！')
                    } 
                }else{
                    alert('请输入检查结果！')
                }
                this.$emit('childFormData','success');
                return false;
            },
            //选择表单上传图片
            xmTanUploadImg:function(obj) { 
                obj = obj.target;
                var fl=obj.files.length; 
                var imgSrc = this.imgSrc;
                for(var i=0;i<fl;i++){  
                  var file=obj.files[i];  
                  var reader = new FileReader();   
                  reader.onload = function (e) {  
                    // console.log("成功读取....");  
                    var src = e.target.result;
                    imgSrc.push(src);               
                  }
                  reader.readAsDataURL(file);   
                } 
                this.imgSrc = imgSrc;
            }
        },
        mounted:function(){
            if(this.table.table_sort == this.table.length){
                this.nextShow = true;
                if(('S'+this.table.starLevel) == this.star){
                    this.status = 1;
                }
            }
            //获取表单数据
            this.$http.jsonp(path+'crm/getStarInfoRow.do', {
              jsonp: 'jsoncallback',
              params: {
                flownumber: this.flownum,
                star: 'S'+this.table.starLevel,
                reverse1: this.city,
                table_sort: this.table.table_sort
              }
            })
            .then(function(data) {
                // console.log(data);
                data = data.body;
                //如果数据记录存在，则填入表单
                if(data.length>0){
                    this.comments = data[0].COMMENTS;
                    this.textArea = data[0].JCJG;
                    this.score = data[0].SCORE;
                    var imgs = data[0].IMGS;
                    var imgSrc = [];
                    for(var i=0;i<imgs.length;i++){
                        imgSrc.push('http://10.11.0.206:8866/CrmApp'+imgs[i].ATT_PATH);
                    }
                    this.imgSrc = imgSrc;
                }
            })
        }

    }
</script>

<style lang="less" scoped>
@import "../less/variable.less";
    .CMain2{

        .now{
            display: block;
            height: 1rem;
            background: #eee;
        }


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
                    margin-left: 1.33%; 
                    margin-top: .2rem;
                }
                li:last-child{
                    margin-right: 0;
                }
                // li:nth-child(2n){
                //     margin-right: 0;
                // }
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