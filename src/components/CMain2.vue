<template lang="html">
    <div class="CMain2">
        <textarea placeholder="检查结果..."></textarea>
        <div class="imgArea">
            <slot></slot>
            <div class="img1">
                <img src="../assets/6-camera.png">
            </div>
        </div>
        <div class="inputArea">
            <label>备注：</label><input placeholder="备注...">
        </div>
        <div class="scoreArea">
            <label>得分：</label>
            <input type="number">
        </div>

    </div>
</template>
<style lang="less" scoped>
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
        .imgArea{
            height: auto;
            padding: 0.15rem 0.27rem 0.27rem 0.1rem;
            background: #fafafa;
            overflow: hidden;
            div{
                position: relative;
                float: left;
                width: 0.8rem;
                height: 0.8rem;
                margin-left: 0.17rem;
                margin-top: 0.27rem;
                background: rgba(20,20,20,0.1);
                border-radius: 8px;
                img{
                    width: 100%;
                    height: auto;
                }
                span{
                    position: absolute;
                    right: -0.3rem;
                    top: -0.3rem;
                    display: inline-block;
                    width: 0.213rem;
                    height: 0.213rem;
                    padding: 0.20rem;
                    border-radius: 50%;
                    background: url("../assets/6-delete.png")no-repeat center;
                }
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
                width: 1.8rem;
                font-weight: bold;
                font-size: 0.1rem;
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
    export default{
        name: 'CMain2'
    }
</script>
