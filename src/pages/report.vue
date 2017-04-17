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
            <h1 v-text="storeName"></h1>
            <div class="sTitle">
                <img src="../assets/5-cituy.png">
                <span v-text="name"></span>
            </div>
            <ul>
                <li v-cloak v-for="score in scores">
                    <span>{{ score.name }}</span>： <i>{{ score.value }}</i> 分
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
    import HeadLeft from '@/components/HeadLeft.vue'
    import HeadName from '@/components/HeadName.vue'
    export default{
        name: 'report',
        components:{ HeadLeft, HeadName },
        data() {
            return {
                storeName: '东莞市厚街镇3D专卖店',
                name: '三-六级城市',
                scores: [
                    {name: '一星', value: '98'},
                    {name: '二星', value: '88'},
                    {name: '二星', value: '88'},
                    {name: '二星', value: '88'},
                    {name: '二星', value: '88'}
                ]
            }
        },
        methods: {
            back() {
                this.$router.back();
            }
        }
    }
</script>
