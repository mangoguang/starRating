<template lang="html">
    <div class="check">
        <div class="header">
            <head-left>
                <img src="../assets/2-back.png" @click="back">
            </head-left>
            <head-name>
                <p>评星进行中</p>
            </head-name>
            <head-right>
                <p><i v-text="starLevel"></i>/<span v-text="starTatal"></span></p>
            </head-right>
        </div>

        <div class="swiper-container">
            <div class="swiper-scrollbar"></div>

            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(title, index) in swiperSlides">
                    <div class="contain">
                        <c-title>
                            <p>{{ title.KHMK }}</p>
                        </c-title>
                        <c-head>
                            <p><span>{{ title.KHXM1 }}</span> <i>({{ title.FZ }}分)</i></p>
                        </c-head>
                        <p @click.self="dialogOpen(index)">规则</p>

                        <div class="GZContain" v-show="swiperSlides[index].ISGZ">
                            <span class="GZClose"></span>
                            <ul>
                                <li v-for="(value,index) in swiperSlides[index].JCBZ.split('；')">
                                     {{ value }}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="contain_main">
                        <c-main1>
                            <p>{{ title.JSBZ }}</p>
                        </c-main1>
                        <CMain2 @childFormData="formData"></CMain2>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
    @import "../assets/css/swiper.css";
    @import "../less/variable";
    .header{
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;
        width: 100%;
        i{
            font-style: normal;
            font-size: 0.48rem;
            color: @subfc;
        }
    }
    .contain{
        position: relative;
        width: 93%;
        margin: 0 auto;
        padding-bottom: 0.7rem;
        border-bottom: 1px solid #e5e5e5;
        >p{
            position: absolute;
            bottom: 0.05rem;
            right: 0;
            width: 1.07rem;
            height: 0.59rem;
            line-height: 0.59rem;
            text-align: center;
            font-weight: bold;
            font-size: 0.38rem;
            color: #333012;
            background: #ffee58;
            border-radius: 0.1rem;
        }
        .GZContain{
            position: absolute;
            top: 1.8rem;
            left: 0;
            width: 94%;
            height: auto;
            padding: 0.4rem 0.27rem;
            background: rgba(255,238,88,0.9);
            text-align: left;
            z-index: 500;
            border-radius: 8px;
            ul{
                li{
                    line-height: 0.5rem;
                    margin: 0.5rem 0;
                    font-size: 0.35rem;
                    color: #666;
                }
            }
        }
    }
    .swiper-container{
        padding-top: 1.33rem;
        width: 100%;
        height: auto;
        .swiper-scrollbar{
            padding-top: 1.33rem;
            height: 3px;
            border-radius: 0;
        }
    }
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
                border: none;
                outline: none;
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
                width: 1.5rem;
                font-weight: bold;
                font-size: 0.51rem;
                color: #ff7559;
                border: none;
                outline: none;
                border-bottom: 2px solid #ff7559;
                text-align: center;
            }
        }
    }

</style>
<script>
    import {path_java} from '@/common/variable.js'
    import $ from 'n-zepto'
    import HeadLeft from '@/components/HeadLeft.vue'
    import HeadName from '@/components/HeadName.vue'
    import HeadRight from '@/components/HeadRight.vue'
    import CMain1 from '@/components/CMain1.vue'
    import CMain2 from '@/components/CMain2.vue'
    import CImg from '@/components/CImg.vue'

    import CTitle from '@/components/CTitle.vue'
    import CHead from '@/components/CHead.vue'

    export default{
        name: 'check',
        components:{ HeadLeft, HeadName, HeadRight, CTitle, CHead, CMain1, CImg, CMain2 },
        data() {
            return {
                starLevel: '1',
                starTatal: '',
                textArea: '',
                swiperSlides: [],
            }
        },
        mounted() {
            // 确定加载模板
            var firstN = '', secondN = '';
            if( this.$route.params.city == 'C1' ){
                firstN =  0;
            }else{
                firstN = 1;
            }

            if( this.$route.params.star == 'S1'){
                secondN = 1;
                this.starTatal = '1';
            }else if( this.$route.params.star == 'S2' ){
                secondN = 2;
                this.starTatal = '2';
            }else if( this.$route.params.star == 'S3'){
                secondN = 3;
                this.starTatal = '3';
            }else if( this.$route.params.star == 'S4'){
                secondN = 4;
                this.starTatal = '4';
            }else{
                secondN = 5;
                this.starTatal = '5';
            }

            var str = {
                moduleid: 'M'+firstN+'2'
            }

            this.$http.jsonp(path_java + 'getModuleInfo.do',
                {
                    jsonp: 'jsoncallback',
                    params: str
                }
            ).then(function(res){
                if(res.status == 200){
                    console.log(res.body)
                    this.swiperSlides = res.body;

                   console.log(this.swiperSlides);
                }else{
                    alert('请检查网络')
                }
            })

            var mySwiper = new Swiper('.swiper-container', {
                observer:true,
                observeParents:true,
                //autoplay: 1000,
                setWrapperSize :true,
                scrollbar: '.swiper-scrollbar',
                scrollbarHide: false
                //pagination : '.swiper-pagination',
                //paginationClickable :true,
            });
        },
        methods: {
            back() {
                this.$router.back();
            },
            dialogOpen(index) {
                this.swiperSlides[index].ISGZ = !this.swiperSlides[index].ISGZ;
            },
            formData:function(data){
                console.log(data);
            }

        }
    }
</script>
