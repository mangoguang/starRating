<template>
    <div class="report">
        <div class="header">
            <head-name>
                <p>该经销商评分结果</p>
            </head-name>
        </div>
    </div>
</template>
<style>

</style>
<script>
    import HeadLeft from '@/components/HeadLeft.vue'
    import HeadName from '@/components/HeadName.vue'
    export default{
        name: 'report',
        components:{ HeadLeft, HeadName }
    }
</script>
