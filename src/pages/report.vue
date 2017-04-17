<template>
    <div class="report">
        <div class="header">
            <head-left></head-left>
            <head-name>
                <p>该经销商评分结果</p>
            </head-name>
        </div>
    </div>
</template>
<style>

</style>
<script>
    import HeadLeft from './components/header.vue'
    import OtherComponent from './components/other.vue'
    export default{
        name: 'report',
        data(){

        },
        components:{
            'other-component':OtherComponent,
            HeaderComponent,
        }
    }
</script>
