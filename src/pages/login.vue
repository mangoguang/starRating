<template>
    <div class="login">
        <div class="imgBox">
            <img src="../assets/logo.png">
            <p>经销商评分系统</p>
        </div>
        <div class="form">
            <div class="user">
                <img src="../assets/logo.png">
                <input type="text" placeholder="请输入账户">
            </div>
            <div class="password">
                <img src="../assets/logo.png">
                <input type="password" placeholder="请输入密码">
            </div>
        </div>
        <div class="submit">
            <router-link to="./index">登 录</router-link>
        </div>

    </div>
</template>
<style lang="less" scoped>
    .imgBox{
        width: 100%;
        height: auto;
        padding-top: 20%;
        text-align: center;
        img{
            width: 30%;
            height: auto;
        }
        p{
            font-weight: bold;
            font-size: 36px;
            color: #222;
        }
    }
    .form{
        width: 60%;
        height: 40%;
        margin: 0 auto;
        div{
            height: 98px;
            overflow: hidden;
            img{
                float: left;
                width: 48px;
                padding: 25px;
            }
            input{
                float: left;
                width: 70%;
                height: 60px;
                margin: 19px 0;
                text-align: center;
                font-size: 36px;
                color: #666;
                background: none;
                border: none;
                outline: none;
                border-bottom: 1px solid #111;
            }
        }
    }
    .submit{
        height: 78px;
        width: 80%;
        margin: 40px auto;
        text-align: center;
        line-height: 78px;
        background: #41b883;
        border-radius: 10px;
        a{
            text-decoration: none;
            font-size: 36px;
            color: #fff;
        }
    }

</style>
<script>
    export default{

    }
</script>
