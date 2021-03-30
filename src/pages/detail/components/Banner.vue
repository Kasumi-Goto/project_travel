<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" :src="bannerImg" />
            <div class="banner-info">
                <div class="banner-title">{{ this.sightName }}</div>
                <div class="banner-number">
                    <span class="iconfont banner-icon">&#xe702;</span
                    >{{ this.bannerImgs.length }}
                </div>
            </div>
        </div>
        <fade>
            <common-gallery
                :imgs="bannerImgs"
                v-show="showgallery"
                @close="handlegalleryClose"
            ></common-gallery>
        </fade>
    </div>
</template>

<script>
import CommonGallery from 'common/gallery/Gallery'
import Fade from 'common/fade/Fade'
export default {
    name: 'DetailBanner',
    components: {
        CommonGallery,
        Fade
    },
    props: {
        sightName: String,
        bannerImg: String,
        bannerImgs: Array
    },
    data: function () {
        return {
            showgallery: false
        }
    },
    methods: {
        handleBannerClick: function () {
            this.showgallery = true
        },
        handlegalleryClose: function () {
            this.showgallery = false
        }
    }
}
</script>

<style lang="stylus" scoped>
.banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%
    .banner-img
        width 100%
    .banner-info
        display flex
        position absolute
        left 0
        right 0
        bottom 0
        line-height .6rem
        color #fff
        background-image linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,.8))
        .banner-title
            flex 1
            font-size .32rem
            padding 0 .2rem
        .banner-number
            height .32rem
            line-height .32rem
            padding 0 .4rem
            margin-top .14rem
            border-radius .2rem
            background rgba(0,0,0,.8)
            font-size .24rem
            .banner-icon
            // 字体覆盖
                font-size .24rem
</style>
