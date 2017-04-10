<template>
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
    </div>
</template>
<style lang="less" scoped>
    @import "../less/variable";
    .header{
        i{
            font-style: normal;
            font-size: 0.48rem;
            color: @subfc;
        }
    }
</style>
<script>
    import HeadLeft from '@/components/HeadLeft.vue'
    import HeadName from '@/components/HeadName.vue'
    import HeadRight from '@/components/HeadRight.vue'
    export default{
        name: 'check',
        components:{ HeadLeft, HeadName, HeadRight },
        methods: {
            back() {
                this.$router.back();
            }
        }
    }
</script>
