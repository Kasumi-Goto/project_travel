<template>
    <div class="wrapper">
        <!-- 在最外层添加一个div，防止网速慢让下面的元素产生抖动，等到图片加载完才撑开这个区域 -->
        <swiper :options="swiperOptions" v-if="showSwiper">
            <swiper-slide v-for="item of list" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl" />
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'HomeSwiper',
    props: {
        list: Array
    },
    data: function () {
        return {
            swiperOptions: {
                pagination: '.swiper-pagination',
                loop: true
            }
        }
    },
    computed: {
        showSwiper: function () {
            return this.list.length
        }
    }
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
    background: #fff
.wrapper
    overflow: hidden
    width:100%
    height:0
    padding-bottom:31.25%
    background: #eee
    .swiper-img
        width:100%
</style>
