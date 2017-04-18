<template>
    <div class="report">
        <div class="header">
            <head-left>
                <img src="../assets/2-back.png" @click="back">
            </head-left>
            <head-name>
                <p>该经销商评分结果</p>
            </head-name>
        </div>

        <div class="imgBox">
            <img src="../assets/07_pic.png">
            <p>评分结果</p>
        </div>

        <div class="content">
            <h1 v-text="scores[0].STORE_NAME"></h1>
            <div class="sTitle">
                <img src="../assets/5-cituy.png">
                <span v-text="scores[0].city_lvl"></span>
            </div>
            <ul>
                <li v-cloak v-for="(score, index) in scores">
                    <span>{{ score.star_lvl }}</span>： <i>{{ score.SCORE }}</i> 分
                </li>
            </ul>
        </div>

        <div class="hint">
            <img src="../assets/2-logo.png">
            <i>星级评价由慕思官方认证</i>
        </div>


    </div>
</template>
<style lang="less" scoped>
    [v-cloak]{
        display: none;
    }

    .report{
        position: absolute;
        width: 100%;
        height: 100%;
        .imgBox{
            width: 100%;
            height: 4rem;
            background: #ffee58;
            img{
                display: block;
                padding: 0.7rem 0 0.3rem;
                vertical-align: middle;
            }
            p{
                font-weight: bold;
                font-size: 0.43rem;
                color: #333012;
            }
        }

        .content{
            padding-top: 0.5rem;
            h1{
                font-weight: bold;
                font-size: 0.51rem;
                color: #333021;
            }
            .sTitle{
                img{
                    display: inline-block;
                    vertical-align: top;
                }
                span{
                    display: inline-block;
                    vertical-align: middle;
                }
            }
            ul{
                padding-top: 0.5rem;
                li{
                    font-weight: bold;
                    font-size: 0.375rem;
                    span{
                        font-size: 0.375rem;
                    }
                    i{
                        margin-left: 0.3rem;
                        font-style: normal;
                        font-size: 0.8rem;
                    }
                }
            }

        }

        .hint{
            position: absolute;
            width: 100%;
            bottom: 0.5rem;
            img{
                vertical-align: middle;
            }
            i{
                vertical-align: middle;
                margin-left: 0.15rem;
            }
        }
    }


</style>
<script>
    import {path} from '@/common/variable.js'
    import HeadLeft from '@/components/HeadLeft.vue'
    import HeadName from '@/components/HeadName.vue'

    export default{
        name: 'report',
        components:{ HeadLeft, HeadName },
        data() {
            return {
                scores: []
            }
        },
        mounted(){
            this.$http.jsonp( path+'crm/getTotalScore.do', {
                jsonp: 'jsoncallback',
                params: { flownumber:'123456', reverse1: 'C1'}
            }).then(function(res){
                if(res.status==200){
                    this.scores = res.body;
                }
            }).catch(function(res){
                if(res.status == 0){
                    alert('请检查网络');
                }else if(res.status == 404){
                    alert('请求页面不存在');
                }else if(res.status == 500){
                    alert('服务器发生异常');
                }
            })
        },
        methods: {
            back() {
                this.$router.back();
            }
        }
    }
</script>
