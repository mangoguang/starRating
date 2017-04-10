<template>
    <div class="login">
        <div class="imgBox">
            <img src="../assets/1-name.png">
        </div>
        <div class="form">
            <div class="user">
                <img src="../assets/1-user.png">
                <input type="text" placeholder="请输入账户">
            </div>
            <div class="password">
                <img src="../assets/1-lock.png">
                <input type="password" placeholder="请输入密码">
            </div>
        </div>
        <div class="submit">
            <router-link to="search">登 录</router-link>
        </div>

    </div>
</template>

<style lang="less" scoped>
    @import "../less/variable";
    .imgBox{
        width: 100%;
        height: auto;
        padding-top: 2.13rem;
        text-align: center;
        img{
            width: auto;
            height: 2.13rem;
        }
    }
    .form{
        width: 90%;
        margin: 0 auto;
        padding-top: 1.60rem;
        div{
            height: 1.33rem;
            overflow: hidden;
            img{
                float: left;
                width: 0.45rem;
                height: auto;
                padding: 0.44rem 0;
            }
            input{
                float: left;
                width: 90%;
                height: 1.33rem;
                text-align: center;
                font-size: 0.45rem;
                color: @subfc;
                background: none;
                border: none;
                outline: none;
            }
        }
        .user{
            border-bottom: 1px solid @subfc;
        }
    }
    .submit{
        height: 1.07rem;
        width: 90%;
        margin: 1.06rem auto;
        text-align: center;
        line-height: 1.07rem;
        background: @fc;
        border-radius: 0.10rem;
        a{
            display: block;
            width: 100%;
            height: 100%;
            text-decoration: none;
            font-size: 0.453rem;
            color: @subfc;
        }
    }

</style>
<script>
    export default{

    }
</script>
