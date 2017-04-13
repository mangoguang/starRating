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
                <p><i>2</i>/<span>5</span></p>
            </head-right>
        </div>

        <div class="swiper-container">
            <div class="swiper-scrollbar"></div>

            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(title, index) in swiperSlides">
                    <div class="contain">
                        <c-title>
                            <p>{{ title.title }}</p>
                        </c-title>
                        <c-head>
                            <p><span>{{ title.titleHead }}</span> <i>({{ title.score }})</i></p>
                        </c-head>
                        <p @click.self="dialogOpen(index)">规则</p>

                        <div class="GZContain" v-show="swiperSlides[index].isGZ">
                            <span class="GZClose"></span>
                            <ul>
                                <li v-for="(gzList,index) in swiperSlides[index].gzList">
                                    {{ gzList }}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="contain_main">
                        <c-main1>
                            <p>{{ title.standardW }}</p>
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
                textArea: '',
                swiperSlides: [
                    {
                        index: 1,
                        title: '标题 0标题',
                        titleHead: 'SI/VI应用规范及维护0',
                        score: '28分',
                        standardW: '装阿什利爱上大口径按时爱上看到，打算卡技术的。挨打了盛大阿萨德，打四大块的adas.asdad来看。爱上大家卡的啊。茶水的骄傲来思考爱上大口径按时的。爱上打开看教案上，按打款了。',
                        isGZ: false,
                        gzList: [
                            '1.阿卡卡爱上了大看剪了打看，阿拉卡罗拉阿萨德卡奥阿里卡就爱看挨打啦卡里就大了爱哭打蜡。',
                            '2.阿卡卡爱上了大看剪了打看，阿拉卡罗拉阿萨德卡奥阿里卡就爱看挨打啦卡里就大了爱哭打蜡。',
                            '3.阿卡卡爱上了大看剪了打看，阿拉卡罗拉阿萨德卡奥阿里卡就爱看挨打啦卡里就大了爱哭打蜡。'
                        ]
                    },{
                        index: 2,
                        title: '标题 1标题',
                        titleHead: 'SI/VI应用规范及维护1',
                        score: '10分',
                        standardW: '装阿什利爱上大口径按时爱上看到，打算卡技术的。挨打了盛大阿萨德，打四大块的adas.asdad来看。爱上大家卡的啊。茶水的骄傲来思考爱上大口径按时的。爱上打开看教案上，按打款了。',
                        isGZ: false,
                        gzList: [
                            '4.阿卡卡爱上了大看剪了打看，阿拉卡罗拉阿萨德卡奥阿里卡就爱看挨打啦卡里就大了爱哭打蜡。',
                            '5.阿卡卡爱上了大看剪了打看，阿拉卡罗拉阿萨德卡奥阿里卡就爱看挨打啦卡里就大了爱哭打蜡。',
                            '6.阿卡卡爱上了大看剪了打看，阿拉卡罗拉阿萨德卡奥阿里卡就爱看挨打啦卡里就大了爱哭打蜡。'
                        ]
                    },{
                        index: 3,
                        title: '标题 2标题',
                        titleHead: 'SI/VI应用规范及维护2',
                        score: '5分',
                        standardW: '装阿什利爱上大口径按时爱上看到，打算卡技术的。挨打了盛大阿萨德，打四大块的adas.asdad来看。爱上大家卡的啊。茶水的骄傲来思考爱上大口径按时的。爱上打开看教案上，按打款了。',
                        isGZ: false,
                        gzList: [
                            '7.阿卡卡爱上了大看剪了打看，阿拉卡罗拉阿萨德卡奥阿里卡就爱看挨打啦卡里就大了爱哭打蜡。',
                            '8.阿卡卡爱上了大看剪了打看，阿拉卡罗拉阿萨德卡奥阿里卡就爱看挨打啦卡里就大了爱哭打蜡。',
                            '9.阿卡卡爱上了大看剪了打看，阿拉卡罗拉阿萨德卡奥阿里卡就爱看挨打啦卡里就大了爱哭打蜡。'
                        ]
                    }
                ],
            }
        },
        mounted() {
            var mySwiper = new Swiper('.swiper-container', {
                    observeParents:true,
                    //autoplay: 1000,
                    setWrapperSize :true,
                    scrollbar: '.swiper-scrollbar',
                    scrollbarHide: false
                    //pagination : '.swiper-pagination',
                    //paginationClickable :true,
            })
        },
        methods: {
            back() {
                this.$router.back();
            },
            dialogOpen(index) {
                this.swiperSlides[index].isGZ = !this.swiperSlides[index].isGZ
            },
            formData:function(data){
                console.log(data);
            }

        }
    }
</script>
