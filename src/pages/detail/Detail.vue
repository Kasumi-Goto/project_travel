<template>
    <div>
        <detail-banner></detail-banner>
        <detail-header></detail-header>
        <div class="content"></div>
    </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
export default {
    name: 'Detail',
    components: {
        DetailBanner,
        DetailHeader
    }
}
</script>

<style lang="stylus" scoped>
// 撑开页面高度,让页面足够长
.content
    height 50rem
</style>
