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
                        <p @click="dialogOpen">规则</p>
                    </div>
                    <div class="contain_main">
                        <c-main1>
                            <p>{{ title.standardW }}</p>
                        </c-main1>
                        <c-main2>
                            <div class="img1">
                                <span></span>
                                <img src="../assets/logo.png">
                            </div><div class="img1">
                                <span></span>
                                <img src="../assets/logo.png">
                            </div><div class="img1">
                                <span></span>
                                <img src="../assets/logo.png">
                            </div><div class="img1">
                                <span></span>
                                <img src="../assets/logo.png">
                            </div><div class="img1">
                                <span></span>
                                <img src="../assets/logo.png">
                            </div><div class="img1">
                                <span></span>
                                <img src="../assets/logo.png">
                            </div>
                            <div class="img1">
                                <span></span>
                                <img src="../assets/logo.png">
                            </div><div class="img1">
                                <span></span>
                                <img src="../assets/logo.png">
                            </div><div class="img1">
                                <span></span>
                                <img src="../assets/logo.png">
                            </div><div class="img1">
                                <span></span>
                                <img src="../assets/logo.png">
                            </div>
                        </c-main2>
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

</style>
<script>
    import HeadLeft from '@/components/HeadLeft.vue'
    import HeadName from '@/components/HeadName.vue'
    import HeadRight from '@/components/HeadRight.vue'
    import CMain1 from '@/components/CMain1.vue'
    import CMain2 from '@/components/CMain2.vue'

    import CTitle from '@/components/CTitle.vue'
    import CHead from '@/components/CHead.vue'

    export default{
        name: 'check',
        components:{ HeadLeft, HeadName, HeadRight, CTitle, CHead, CMain1, CMain2 },
        data() {
            return {
                swiperSlides: [
                    {
                        index: 1,
                        title: '标题 0标题',
                        titleHead: 'SI/VI应用规范及维护0',
                        score: '28分',
                        standardW: '装阿什利爱上大口径按时爱上看到，打算卡技术的。挨打了盛大阿萨德，打四大块的adas.asdad来看。爱上大家卡的啊。茶水的骄傲来思考爱上大口径按时的。爱上打开看教案上，按打款了。'

                    },{
                        index: 2,
                        title: '标题 1标题',
                        titleHead: 'SI/VI应用规范及维护1',
                        score: '10分',
                        standardW: '装阿什利爱上大口径按时爱上看到，打算卡技术的。挨打了盛大阿萨德，打四大块的adas.asdad来看。爱上大家卡的啊。茶水的骄傲来思考爱上大口径按时的。爱上打开看教案上，按打款了。'

                    },{
                        index: 3,
                        title: '标题 2标题',
                        titleHead: 'SI/VI应用规范及维护2',
                        score: '5分',
                        standardW: '装阿什利爱上大口径按时爱上看到，打算卡技术的。挨打了盛大阿萨德，打四大块的adas.asdad来看。爱上大家卡的啊。茶水的骄傲来思考爱上大口径按时的。爱上打开看教案上，按打款了。'

                    },

                ]
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
            dialogOpen() {

            }

        }
    }
</script>
