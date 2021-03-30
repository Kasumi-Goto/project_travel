<template>
    <div>
        <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
            <div class="iconfont header-abs-back">&#xe624;</div>
        </router-link>
        <div class="header-fix" v-show="!showAbs" :style="opacityStyle">
            <router-link to="/">
                <div class="iconfont header-fix-back">&#xe624;</div>
            </router-link>
            景点详情
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailHeader',
    data: function () {
        return {
            showAbs: true,
            opacityStyle: {
                opacity: 0
            }
        }
    },
    methods: {
        handleScroll: function () {
            console.log('scroll')
            // 浏览器兼容
            const top =
                document.documentElement.scrollTop || document.body.scrollTop
            // 进入60到140的范围渐隐渐显
            if (top > 60) {
                let opacity = top / 140
                // opacity 最大值是1
                opacity = opacity > 1 ? 1 : opacity
                this.opacityStyle = { opacity }
                this.showAbs = false
            } else {
                this.showAbs = true
            }
        }
    },
    activated: function () {
        window.addEventListener('scroll', this.handleScroll)
    },
    deactivated: function () {
        window.removeEventListener('scroll', this.handleScroll)
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header-abs
    position absolute
    left .2rem
    top .2rem
    width .8rem
    height .8rem
    line-height .8rem
    text-align center
    border-radius .4rem
    background rgba(0,0,0,.8)
    .header-abs-back
        color #fff
        font-size .4rem
.header-fix
    z-index 2
    position fixed
    top 0
    left 0
    right 0
    height $headerHeight
    line-height $headerHeight
    text-align center
    color #fff
    background $bgColor
    font-size .32rem
    .header-fix-back
        //不绝对定位无法显示
        position absolute
        top 0
        left 0
        width .64rem
        text-align center
        font-size .4rem
        color #fff
</style>
