<template>
    <div class="wrapper">
        <!-- 在最外层添加一个div，防止网速慢让下面的元素产生抖动，等到图片加载完才撑开这个区域 -->
        <swiper :options="swiperOptions">
            <swiper-slide v-for="item of swiperList" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl" />
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'HomeSwiper',
    data: function () {
        return {
            swiperOptions: {
                pagination: '.swiper-pagination',
                loop: true
            },
            swiperList: [
                {
                    id: '0001',
                    imgUrl:
                        'https://imgs.qunarzz.com/sight/p0/1504/b4/b40f1cb571976eca.water.jpg_640x276_0c26bcd7.jpg'
                },
                {
                    id: '0002',
                    imgUrl:
                        'https://imgs.qunarzz.com/sight/p0/1605/9f/9f94e6723147037b90.water.jpg_640x276_eb1788f5.jpg'
                }
            ]
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
    padding-bottom:41.25%
    background: #eee
    .swiper-img
        width:100%
</style>
